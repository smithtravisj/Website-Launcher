'use client';

import React, { useState, useEffect } from 'react';
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
    title: 'College Orbit',
    description: 'A personal, privacy-first college dashboard for managing tasks, deadlines, courses, and more.',
    favicon: '/apple-touch-icon copy.png',
    links: [
      { label: 'Visit Site', url: 'https://collegeorbit.app', main: true },
      { label: 'GitHub', url: 'https://github.com/smithtravisj/College-Survival-Tool' },
      { label: 'Railway', url: 'https://railway.com/project/80ee06d5-3310-4fe7-92a4-7d463d879ed8?environmentId=14f6127e-9353-4f22-b387-bb9f0b125874' },
    ],
  },
  {
    id: 4,
    title: 'Money Reality',
    description: 'A personal budget tracker - your financial truth mirror.',
    favicon: '/money-reality-favicon.png',
    links: [
      { label: 'Visit Site', url: 'https://money-reality-production.up.railway.app/budget', main: true },
      { label: 'GitHub', url: 'https://github.com/smithtravisj/Money-Reality' },
      { label: 'Railway', url: 'https://railway.com/project/31c343ab-2e1d-4133-a38f-88a564f91eb6?' },
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
];

const protonAppsSecondary = [
  {
    id: 1,
    title: 'Proton VPN',
    description: 'Secure VPN service for privacy and security.',
    favicon: '/proton-vpn.ico',
    appUrl: 'protonvpn://',
    links: [
      { label: 'Visit', url: 'https://protonvpn.com', main: true },
    ],
  },
  {
    id: 2,
    title: 'Proton Docs',
    description: 'Secure collaborative document editing.',
    favicon: '/proton-docs.ico',
    appUrl: 'proton-docs://',
    links: [
      { label: 'Visit', url: 'https://docs.proton.me/u/0/recents', main: true },
    ],
  },
  {
    id: 3,
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
    favicon: '/libbyyyyy.png',
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
    favicon: '/youtube_cropped.svg',
    links: [
      { label: 'Visit', url: 'https://www.youtube.com', main: true },
    ],
  },
  {
    id: 2,
    title: 'Crunchyroll',
    description: 'Anime and manga streaming.',
    favicon: 'https://img.icons8.com/color/96/000000/crunchyroll.png',
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
    favicon: 'https://img.icons8.com/color/96/000000/amazon-prime-video.png',
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
  {
    id: 8,
    title: 'HBO Max',
    description: 'HBO series, movies, and Max originals.',
    favicon: 'https://www.hbomax.com/img/hbomax/logo_nav_bar.png',
    links: [
      { label: 'Visit', url: 'https://max.com', main: true },
    ],
  },
];

const financialApps = [
  {
    id: 1,
    title: 'America First',
    description: 'Credit union banking services.',
    favicon: '/afcu.jpg',
    links: [
      { label: 'Visit', url: 'https://www.americafirst.com', main: true },
    ],
  },
  {
    id: 2,
    title: 'Capital One',
    description: 'Banking and credit card services.',
    favicon: 'https://www.capitalone.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.capitalone.com', main: true },
    ],
  },
  {
    id: 3,
    title: 'Chime',
    description: 'Mobile banking and financial services.',
    favicon: '/chime.png',
    links: [
      { label: 'Visit', url: 'https://www.chime.com', main: true },
    ],
  },
  {
    id: 4,
    title: 'SoFi',
    description: 'Online personal finance and investing platform.',
    favicon: 'https://www.sofi.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.sofi.com', main: true },
    ],
  },
];

const financialAppsSecondary = [
  {
    id: 1,
    title: 'Discover',
    description: 'Credit cards and banking services.',
    favicon: 'https://www.discover.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.discover.com', main: true },
    ],
  },
  {
    id: 2,
    title: 'Experian',
    description: 'Credit monitoring and identity protection.',
    favicon: 'https://www.experian.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.experian.com', main: true },
    ],
  },
  {
    id: 3,
    title: 'US Bank',
    description: 'Banking and financial services.',
    favicon: 'https://www.usbank.com/favicon.ico',
    links: [
      { label: 'Visit', url: 'https://www.usbank.com', main: true },
    ],
  },
];

const desktopTitle = 'Site Launcher';
const mobileTitle = 'App Launcher';
const desktopDescription = 'My projects and essential tools';
const mobileDescription = 'Apps & tools';

export default function Home() {
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Load collapsed sections from database on mount
  useEffect(() => {
    const loadCollapsedSections = async () => {
      try {
        const response = await fetch('/api/collapsed-sections');
        if (response.ok) {
          const data = await response.json();
          setCollapsedSections(new Set(data.collapsedSections));
        }
      } catch (error) {
        console.error('Failed to load collapsed sections:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCollapsedSections();
  }, []);

  const toggleSection = async (sectionId: string) => {
    try {
      const isCurrentlyCollapsed = collapsedSections.has(sectionId);
      const newCollapsedState = !isCurrentlyCollapsed;

      // Update UI optimistically
      setCollapsedSections(prev => {
        const next = new Set(prev);
        if (newCollapsedState) {
          next.add(sectionId);
        } else {
          next.delete(sectionId);
        }
        return next;
      });

      // Save to database
      const response = await fetch('/api/collapsed-sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sectionId, isCollapsed: newCollapsedState }),
      });

      if (!response.ok) {
        console.error('Failed to save collapsed section state');
        // Revert on error
        setCollapsedSections(prev => {
          const next = new Set(prev);
          if (isCurrentlyCollapsed) {
            next.add(sectionId);
          } else {
            next.delete(sectionId);
          }
          return next;
        });
      }
    } catch (error) {
      console.error('Error toggling section:', error);
    }
  };

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
            <h2 className={styles.appsHeading} onClick={() => toggleSection('myProjects')}>
              <span>My Projects</span>
              <span className={`${styles.toggleIcon} ${collapsedSections.has('myProjects') ? styles.collapsed : ''}`}></span>
            </h2>
            {!collapsedSections.has('myProjects') && (
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
            )}
          </div>

          <h2 className={`${styles.appsHeading} ${styles.protonAppsHeading}`} onClick={() => toggleSection('protonApps')}>
            <span>Proton Apps</span>
            <span className={`${styles.toggleIcon} ${collapsedSections.has('protonApps') ? styles.collapsed : ''}`}></span>
          </h2>
          {!collapsedSections.has('protonApps') && (
          <>
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
          <div className={styles.grid}>
            {protonAppsSecondary.map((app) => {
              const mainLink = app.links.find((link) => link.main);
              const handleAppClick = () => {
                if (!mainLink) return;
                if (app.appUrl) {
                  window.location.href = app.appUrl;
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
          </>
          )}

          <h2 className={`${styles.appsHeading} ${styles.protonAppsHeading}`} onClick={() => toggleSection('toolsApps')}>
            <span>Tools & Apps</span>
            <span className={`${styles.toggleIcon} ${collapsedSections.has('toolsApps') ? styles.collapsed : ''}`}></span>
          </h2>
          {!collapsedSections.has('toolsApps') && (
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
                    <img
                      src={app.favicon}
                      alt={app.title}
                      className={app.title === 'Libby' ? styles.circularFavicon : styles.protonFavicon}
                    />
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
          )}

          <h2 className={`${styles.appsHeading} ${styles.protonAppsHeading}`} onClick={() => toggleSection('financialApps')}>
            <span>Financial Apps</span>
            <span className={`${styles.toggleIcon} ${collapsedSections.has('financialApps') ? styles.collapsed : ''}`}></span>
          </h2>
          {!collapsedSections.has('financialApps') && (
          <>
          <div className={styles.grid}>
            {financialApps.map((app) => {
              const mainLink = app.links.find((link) => link.main);
              return (
                <div
                  key={app.id}
                  className={styles.projectCard}
                  onClick={() => mainLink && window.open(mainLink.url, '_blank')}
                >
                  <div className={app.title === 'Chime' ? `${styles.titleWrapper} ${styles.chimeWrapper}` : styles.titleWrapper}>
                    <img
                      src={app.favicon}
                      alt={app.title}
                      className={app.title === 'Chime' ? styles.chimeFavicon : ['SoFi', 'America First'].includes(app.title) ? `${styles.protonFavicon} ${styles.roundedIcon}` : styles.protonFavicon}
                    />
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
          <div className={styles.grid}>
            {financialAppsSecondary.map((app) => {
              const mainLink = app.links.find((link) => link.main);
              return (
                <div
                  key={app.id}
                  className={styles.projectCard}
                  onClick={() => mainLink && window.open(mainLink.url, '_blank')}
                >
                  <div className={styles.titleWrapper}>
                    <img
                      src={app.favicon}
                      alt={app.title}
                      className={['Discover', 'Experian', 'US Bank'].includes(app.title) ? `${styles.protonFavicon} ${styles.roundedIcon}` : styles.protonFavicon}
                    />
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
          </>
          )}

          <h2 className={`${styles.appsHeading} ${styles.protonAppsHeading}`} onClick={() => toggleSection('streamingServices')}>
            <span>Streaming Services</span>
            <span className={`${styles.toggleIcon} ${collapsedSections.has('streamingServices') ? styles.collapsed : ''}`}></span>
          </h2>
          {!collapsedSections.has('streamingServices') && (
          <div className={`${styles.grid} ${styles.streamingGrid}`}>
            {streamingServices.map((service) => {
              const mainLink = service.links.find((link) => link.main);
              return (
                <div
                  key={service.id}
                  className={styles.projectCard}
                  onClick={() => mainLink && window.open(mainLink.url, '_blank')}
                >
                  <div className={service.title === 'HBO Max' ? `${styles.titleWrapper} ${styles.maxTitleWrapper}` : styles.titleWrapper}>
                    <img
                      src={service.favicon}
                      alt={service.title}
                      className={service.title === 'HBO Max' ? styles.wideLogoFavicon : styles.protonFavicon}
                    />
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
          )}
        </div>
      </main>
    </div>
  );
}
