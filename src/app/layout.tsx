import React from 'react';

export const metadata = {
  title: 'Skypro.Music',
  description: 'Музыкальный плеер',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#181818' }}>
        {children}
      </body>
    </html>
  );
}
