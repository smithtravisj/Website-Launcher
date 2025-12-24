import { getCollapsedSections, toggleSection, initializeDatabase } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

let dbInitialized = false;

async function ensureDbInitialized() {
  if (!dbInitialized) {
    try {
      await initializeDatabase();
      dbInitialized = true;
    } catch (error) {
      console.error('Database initialization error:', error);
    }
  }
}

export async function GET() {
  try {
    await ensureDbInitialized();
    const collapsedSections = await getCollapsedSections();
    return NextResponse.json({ collapsedSections });
  } catch (error) {
    console.error('Error fetching collapsed sections:', error);
    return NextResponse.json(
      { error: 'Failed to fetch collapsed sections' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { sectionId, isCollapsed } = await request.json();

    if (!sectionId || typeof isCollapsed !== 'boolean') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    await toggleSection(sectionId, isCollapsed);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error toggling section:', error);
    return NextResponse.json(
      { error: 'Failed to toggle section' },
      { status: 500 }
    );
  }
}
