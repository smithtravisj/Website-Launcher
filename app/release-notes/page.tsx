import styles from './page.module.css';
import Link from 'next/link';
import { releases } from '@/lib/releases';

export default function ReleaseNotes() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back
        </Link>
        <h1 className={styles.title}>Release Notes</h1>
      </header>

      <main className={styles.main}>
        {releases.map((release) => (
          <section key={release.version} className={styles.release}>
            <div className={styles.releaseHeader}>
              <h2 className={styles.version}>v{release.version}</h2>
              <span className={styles.date}>{release.date}</span>
            </div>
            <ul className={styles.changes}>
              {release.changes.map((change, idx) => (
                <li key={idx}>{change}</li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}
