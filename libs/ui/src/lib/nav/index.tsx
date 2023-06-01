import Link from 'next/link';

import { Button, Container, Flex, Group, Text } from '@mantine/core';

import css from './index.module.scss';

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function Nav({ links }: HeaderResponsiveProps) {
  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={css.linkText}>
      <Button radius="lg" variant="subtle" color="cyan" size="md">
        {link.label}
      </Button>
    </Link>
  ));

  return (
    <Container>
      <Flex justify="left" align="center" className={css.headerRoot}>
        <Flex className={css.headerFlex}>
          <Link href="/">
            <Text className={css.logoText} size="xl">
              <span
                role="img"
                aria-label="Jackolantern Emoji"
                className={css.logo}
              >
                🎃
              </span>
              Boushell
            </Text>
          </Link>
          <Group spacing="xs">{items}</Group>
        </Flex>
      </Flex>
    </Container>
  );
}
