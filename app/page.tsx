'use client';

import React from 'react';
import styles from './page.module.css';

const projects = [
  {
    id: 1,
    title: 'College Survival Tool',
    description: 'A personal, privacy-first college dashboard for managing tasks, deadlines, courses, and more.',
    url: 'https://college-survival-tool.com',
    color: '#2563eb',
  },
  {
    id: 2,
    title: 'We Might Be Nomads',
    description: 'A platform for finding and sharing nomadic living experiences around the world.',
    url: 'https://wemightbenomads.com',
    color: '#7c3aed',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.subtitle}>A collection of web applications I've built</p>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card ${styles.projectCard}`}
              >
                <div className={styles.cardContent}>
                  <div className={styles.colorBar} style={{ backgroundColor: project.color }} />
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.footer}>
                    <span className={styles.link}>Visit →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
