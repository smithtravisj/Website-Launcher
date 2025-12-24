import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function initializeDatabase() {
  const client = await pool.connect();
  try {
    // Create table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS collapsed_sections (
        id SERIAL PRIMARY KEY,
        section_id VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(section_id)
      );
    `);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    client.release();
  }
}

export async function getCollapsedSections(): Promise<string[]> {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'SELECT section_id FROM collapsed_sections ORDER BY section_id'
    );
    return result.rows.map((row) => row.section_id);
  } catch (error) {
    console.error('Error getting collapsed sections:', error);
    return [];
  } finally {
    client.release();
  }
}

export async function toggleSection(sectionId: string, isCollapsed: boolean): Promise<void> {
  const client = await pool.connect();
  try {
    if (isCollapsed) {
      // Insert if collapsed
      await client.query(
        `INSERT INTO collapsed_sections (section_id) VALUES ($1)
         ON CONFLICT (section_id) DO UPDATE SET updated_at = CURRENT_TIMESTAMP`,
        [sectionId]
      );
    } else {
      // Delete if expanded
      await client.query('DELETE FROM collapsed_sections WHERE section_id = $1', [sectionId]);
    }
  } catch (error) {
    console.error('Error toggling section:', error);
    throw error;
  } finally {
    client.release();
  }
}

export default pool;
