'use client';

import React from 'react';
import styles from './page.module.css';

const projects = [
  {
    id: 1,
    title: 'Website Launcher',
    description: 'A clean hub to discover and access all my projects in one place.',
    favicon: '/hellloooooo.png',
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
    favicon: '/IMG_8789.jpeg',
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
    favicon: '/Untitled design copy.png',
    links: [
      { label: 'Visit Site', url: 'https://collegesurvivaltool.com', main: true },
      { label: 'GitHub', url: 'https://github.com/smithtravisj/College-Survival-Tool' },
      { label: 'Railway', url: 'https://railway.com/project/80ee06d5-3310-4fe7-92a4-7d463d879ed8?environmentId=14f6127e-9353-4f22-b387-bb9f0b125874' },
    ],
  },
];

const protonApps = [
  {
    id: 1,
    title: 'Proton Mail',
    description: 'Secure email with end-to-end encryption.',
    favicon: '/proton-mail.ico',
    appUrl: 'protonmail://',
    links: [
      { label: 'Visit', url: 'https://mail.proton.me', main: true },
    ],
  },
  {
    id: 2,
    title: 'Proton Calendar',
    description: 'Encrypted calendar for your events.',
    favicon: '/proton-calendar.ico',
    appUrl: 'proton-calendar://',
    links: [
      { label: 'Visit', url: 'https://calendar.proton.me', main: true },
    ],
  },
  {
    id: 3,
    title: 'Proton Pass',
    description: 'Secure password manager and identity protection.',
    favicon: '/proton-pass.ico',
    appUrl: 'proton-pass://',
    links: [
      { label: 'Visit', url: 'https://pass.proton.me', main: true },
    ],
  },
  {
    id: 4,
    title: 'Proton Drive',
    description: 'Encrypted cloud storage for your files.',
    favicon: '/proton-drive.ico',
    appUrl: 'proton-drive://',
    links: [
      { label: 'Visit', url: 'https://drive.proton.me', main: true },
    ],
  },
  {
    id: 5,
    title: 'Proton VPN',
    description: 'Secure VPN service for privacy and security.',
    favicon: '/proton-vpn.ico',
    appUrl: 'protonvpn://',
    links: [
      { label: 'Visit', url: 'https://protonvpn.com', main: true },
    ],
  },
  {
    id: 6,
    title: 'Proton Lumo',
    description: 'AI-powered writing assistant.',
    favicon: '/proton-lumo.ico',
    appUrl: 'proton-lumo://',
    links: [
      { label: 'Visit', url: 'https://lumo.proton.me', main: true },
    ],
  },
];

const toolsApps = [
  {
    id: 1,
    title: 'Atlassian',
    description: 'Project management and collaboration tools.',
    favicon: 'https://www.atlassian.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.atlassian.com', main: true },
    ],
  },
  {
    id: 2,
    title: 'ChatGPT',
    description: 'AI-powered conversational assistant.',
    favicon: 'https://chat.openai.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://chat.openai.com', main: true },
    ],
  },
  {
    id: 3,
    title: 'Claude',
    description: 'AI assistant by Anthropic.',
    favicon: 'https://claude.ai/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://claude.ai', main: true },
    ],
  },
  {
    id: 4,
    title: 'Libby',
    description: 'Library app for ebooks and audiobooks.',
    favicon: 'https://www.libby.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.libby.com', main: true },
    ],
  },
];

const streamingServices = [
  {
    id: 1,
    title: 'YouTube',
    description: 'Video streaming platform.',
    favicon: 'https://www.youtube.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.youtube.com', main: true },
    ],
  },
  {
    id: 2,
    title: 'Crunchyroll',
    description: 'Anime and manga streaming.',
    favicon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/crunchyroll.svg',
    links: [
      { label: 'Visit', url: 'https://www.crunchyroll.com', main: true },
    ],
  },
  {
    id: 3,
    title: 'Netflix',
    description: 'Movies and TV shows streaming.',
    favicon: 'https://www.netflix.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.netflix.com', main: true },
    ],
  },
  {
    id: 4,
    title: 'Disney Plus',
    description: 'Disney entertainment streaming.',
    favicon: 'https://www.disneyplus.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.disneyplus.com', main: true },
    ],
  },
  {
    id: 5,
    title: 'Hulu',
    description: 'TV shows and movies on demand.',
    favicon: 'https://www.hulu.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.hulu.com', main: true },
    ],
  },
  {
    id: 6,
    title: 'Amazon Prime',
    description: 'Prime Video streaming service.',
    favicon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazonprime.svg',
    links: [
      { label: 'Visit', url: 'https://www.primevideo.com', main: true },
    ],
  },
  {
    id: 7,
    title: 'Paramount Plus',
    description: 'CBS and movie streaming service.',
    favicon: 'https://www.paramountplus.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.paramountplus.com', main: true },
    ],
  },
];

const desktopTitle = 'Site Launcher';
const mobileTitle = 'App Launcher';
const desktopDescription = 'My projects and essential tools';
const mobileDescription = 'Apps & tools';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            <span className={styles.desktopTitle}>{desktopTitle}</span>
            <span className={styles.mobileTitle}>{mobileTitle}</span>
          </h1>
          <p className={styles.subtitle}>
            <span className={styles.desktopDescription}>{desktopDescription}</span>
            <span className={styles.mobileDescription}>{mobileDescription}</span>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.desktopOnly}>
            <h2 className={styles.appsHeading}>My Projects</h2>
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

          <h2 className={`${styles.appsHeading} ${styles.protonAppsHeading}`}>Proton Apps</h2>
          <div className={styles.grid}>
            {protonApps.map((app) => {
              const mainLink = app.links.find((link) => link.main);
              const handleAppClick = () => {
                if (!mainLink) return;
                // Try to open native app first
                if (app.appUrl) {
                  window.location.href = app.appUrl;
                  // Fall back to web version after 1 second if app doesn't open
                  setTimeout(() => {
                    window.open(mainLink.url, '_blank');
                  }, 1000);
                } else {
                  window.open(mainLink.url, '_blank');
                }
              };
              return (
                <div
                  key={app.id}
                  className={styles.projectCard}
                  onClick={() => handleAppClick()}
                >
                  <div className={styles.titleWrapper}>
                    <img src={app.favicon} alt={app.title} className={styles.protonFavicon} />
                    <h2 className={styles.projectTitle}>{app.title}</h2>
                  </div>
                  {app.links.filter((link) => !link.main).length > 0 && (
                    <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
                      {app.links.filter((link) => !link.main).map((link, idx) => (
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
                  )}
                </div>
              );
            })}
          </div>

          <h2 className={`${styles.appsHeading} ${styles.protonAppsHeading}`}>Tools & Apps</h2>
          <div className={styles.grid}>
            {toolsApps.map((app) => {
              const mainLink = app.links.find((link) => link.main);
              return (
                <div
                  key={app.id}
                  className={styles.projectCard}
                  onClick={() => mainLink && window.open(mainLink.url, '_blank')}
                >
                  <div className={styles.titleWrapper}>
                    <img src={app.favicon} alt={app.title} className={styles.protonFavicon} />
                    <h2 className={styles.projectTitle}>{app.title}</h2>
                  </div>
                  {app.links.filter((link) => !link.main).length > 0 && (
                    <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
                      {app.links.filter((link) => !link.main).map((link, idx) => (
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
                  )}
                </div>
              );
            })}
          </div>

          <h2 className={`${styles.appsHeading} ${styles.protonAppsHeading}`}>Streaming Services</h2>
          <div className={styles.grid}>
            {streamingServices.map((service) => {
              const mainLink = service.links.find((link) => link.main);
              return (
                <div
                  key={service.id}
                  className={styles.projectCard}
                  onClick={() => mainLink && window.open(mainLink.url, '_blank')}
                >
                  <div className={styles.titleWrapper}>
                    <img src={service.favicon} alt={service.title} className={styles.protonFavicon} />
                    <h2 className={styles.projectTitle}>{service.title}</h2>
                  </div>
                  {service.links.filter((link) => !link.main).length > 0 && (
                    <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
                      {service.links.filter((link) => !link.main).map((link, idx) => (
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
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
