import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || "Site Launcher";
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'A launcher for my web projects';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: '/hellloooooo.png',
    apple: '/hellloooooo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="apple-touch-icon" href="/hellloooooo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
