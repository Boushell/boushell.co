'use client';
import './global.css';

import { MantineProvider } from '@mantine/core';

import NavLayout from './layouts/nav-layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider withGlobalStyles withNormalizeCSS withCSSVariables>
          <NavLayout>{children}</NavLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
