import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import ReduxProvider from '../store/ReduxProvider';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Skypro.Music',
  description: 'Музыкальный плеер',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={montserrat.className}
        style={{ margin: 0, padding: 0, backgroundColor: '#181818' }}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
