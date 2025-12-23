'use client';

import React from 'react';
import styles from './page.module.css';

const projects = [
  {
    id: 1,
    title: 'Website Launcher',
    description: 'A clean hub to discover and access all my projects in one place.',
    favicon: '/favicon.svg',
    links: [
      { label: 'Visit Site', url: 'https://website-launcher.up.railway.app/', main: true },
      { label: 'GitHub', url: 'https://github.com/smithtravisj/Website-Launcher' },
      { label: 'Railway', url: 'https://railway.com/project/22fb30b6-e4c3-4460-b5a8-2391083ff22b?environmentId=2a3fd645-e6a4-413b-8f9d-b4cd015f8efd' },
    ],
  },
  {
    id: 2,
    title: 'We Might Be Nomads',
    description: 'A platform for finding and sharing nomadic living experiences around the world.',
    favicon: 'https://nomad-ventures-web-production.up.railway.app/icon?d66ee101c6aa26d0',
    links: [
      { label: 'Visit Site', url: 'https://nomad-ventures-web-production.up.railway.app/', main: true },
      { label: 'GitHub', url: 'https://github.com/smithtravisj/We-Might-Be-Nomads' },
      { label: 'Railway', url: 'https://railway.com/project/0646c113-43d1-4d6c-b97e-fa12755fb50f?environmentId=f32d74c3-7295-4225-bceb-58b7a863b377' },
    ],
  },
  {
    id: 3,
    title: 'College Survival Tool',
    description: 'A personal, privacy-first college dashboard for managing tasks, deadlines, courses, and more.',
    favicon: '/cst-favicon.svg',
    links: [
      { label: 'Visit Site', url: 'https://collegesurvivaltool.com', main: true },
      { label: 'GitHub', url: 'https://github.com/smithtravisj/College-Survival-Tool' },
      { label: 'Railway', url: 'https://railway.com/project/80ee06d5-3310-4fe7-92a4-7d463d879ed8?environmentId=14f6127e-9353-4f22-b387-bb9f0b125874' },
    ],
  },
];

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || 'My Projects';
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'A collection of web applications I\'ve built';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>{siteTitle}</h1>
          <p className={styles.subtitle}>{siteDescription}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.grid}>
            {projects.map((project) => {
              const mainLink = project.links.find((link) => link.main);
              return (
                <div
                  key={project.id}
                  className={styles.projectCard}
                  onClick={() => mainLink && window.open(mainLink.url, '_blank')}
                >
                  <div className={styles.titleWrapper}>
                    <img src={project.favicon} alt={project.title} className={styles.favicon} />
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.mainLinkWrapper}>
                    <span className={styles.mainLink}>
                      {mainLink?.label} →
                    </span>
                  </div>
                  <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
                    {project.links.filter((link) => !link.main).map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
