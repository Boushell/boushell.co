'use client';
import Link from 'next/link';

import {
  Burger,
  Button,
  Container,
  Drawer,
  Flex,
  Group,
  Image,
  Stack,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import css from './index.module.scss';

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function Nav({ links }: HeaderResponsiveProps) {
  const smallScreen = useMediaQuery('(max-width: 768px)');
  const [opened, { open, close, toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={css.linkText}>
      <Button
        radius="lg"
        variant="subtle"
        color="cyan"
        size="md"
        onClick={close}
      >
        {link.label}
      </Button>
    </Link>
  ));

  return (
    <Container>
      <Flex justify="left" align="center" className={css.headerRoot}>
        <Flex className={css.headerFlex}>
          <Link href="/">
            <Image src="/logo.svg" width={200} mr={20} />
          </Link>
          {smallScreen ? (
            <Drawer opened={opened} onClose={close}>
              <Image src="/logo.svg" ml="1.2rem" mb="1.2rem" width={200} />
              <Stack spacing="xs">{items}</Stack>
            </Drawer>
          ) : (
            <Group spacing="xs">{items}</Group>
          )}
        </Flex>
        {smallScreen && <Burger opened={opened} onClick={toggle} />}
      </Flex>
    </Container>
  );
}
