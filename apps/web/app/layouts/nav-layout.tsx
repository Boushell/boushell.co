import { Nav } from '@boushell.co/ui';
import { Container } from '@mantine/core';

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav
        links={[
          { link: '/', label: 'Home' },
          { link: '/resume', label: 'Resume' },
        ]}
      />
      <Container mt="2rem">{children}</Container>
    </>
  );
}
