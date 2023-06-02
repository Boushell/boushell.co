'use client';
import Link from 'next/link';

import { Carousel } from '@mantine/carousel';
import { Box, Grid, Image, List, Text, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import css from './landing-page.module.scss';

export function LandingPage({
  portfolioImages,
}: {
  portfolioImages: string[];
}) {
  const smallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <Grid>
      <Grid.Col span={smallScreen ? 12 : 8}>
        <Box className={css.hero} bg="cyan" c="#ececec">
          <Text weight="bold" size={24} mb="md">
            👋 Hey there!
          </Text>
          <Text size={18}>
            I'm James Boushell, a professional full-stack developer. I've
            created and maintain this website to showcase my passion and
            expertise, as well as present my resume in a relevant way!
          </Text>
        </Box>
        <Tooltip
          label="Images fetched using the Dribbble REST API"
          position="bottom"
          color="cyan"
        >
          <Box className={css.portfolioContainer}>
            <Text weight="bold" className={css.portfolioTitle}>
              Graphic Design Portfolio
            </Text>

            <Carousel mx="auto" withIndicators className={css.carousel}>
              {portfolioImages.map((imageUrl) => (
                <Carousel.Slide key={imageUrl}>
                  <Image src={imageUrl} alt="Portfolio image" />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Box>
        </Tooltip>
      </Grid.Col>
      <Grid.Col span={smallScreen ? 12 : 4}>
        <Box className={css.hero} bg="#ececec">
          <Text weight="bold" size="lg" mb="md">
            🧑‍💻 Website Stack
          </Text>
          <Text weight="bold">Front End</Text>
          <List listStyleType="none">
            <List.Item>NextJS / React</List.Item>
            <List.Item>Mantine UI</List.Item>
            <List.Item>Typescript</List.Item>
            <List.Item>SCSS</List.Item>
          </List>
          <br />
          <Text weight="bold">Cloud Platform</Text>
          <Text>Vercel</Text>
          <br />
          <Text weight="bold">Version Control</Text>
          <Link href="https://github.com/Boushell/boushell.co">GitHub</Link>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
