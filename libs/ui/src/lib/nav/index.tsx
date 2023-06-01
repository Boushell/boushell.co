import Link from 'next/link';

import { Container, Flex, Group, Header, Text } from '@mantine/core';

import css from './index.module.scss';

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function Nav({ links }: HeaderResponsiveProps) {
  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={css.linkText}>
      {link.label}
    </Link>
  ));

  return (
    <Header height={60} className={css.headerRoot}>
      <Container>
        <Flex className={css.headerFlex}>
          <Link href="/">
            <Text className={css.logoText}>
              <span role="img" aria-label="Jackolantern Emoji">
                🎃
              </span>{' '}
              Boushell
            </Text>
          </Link>
          <Group spacing="xl">{items}</Group>
        </Flex>
      </Container>
    </Header>
  );
}
