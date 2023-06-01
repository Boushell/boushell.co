'use client';
import './global.css';

import NavLayout from './layouts/nav-layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavLayout>{children}</NavLayout>
      </body>
    </html>
  );
}
