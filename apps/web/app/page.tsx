'use client';
import { useEffect, useState } from 'react';

import axios from 'axios';
import Link from 'next/link';

import { Box, Grid, List, Text } from '@mantine/core';

import css from './page.module.scss';

export default async function HomePage() {
  const [portfolioImages, setPortfolioImages] = useState<string[]>([]);
  useEffect(() => {
    async function fetchPortfolioImages() {
      setPortfolioImages(await getPortfolioImageURLs());
    }

    fetchPortfolioImages();
  }, [portfolioImages]);
  return (
    <Grid>
      <Grid.Col span={8}>
        <Box className={css.hero} bg="cyan" c="#ececec">
          <Text weight="bold" size={24} mb="md">
            👋 Hey there!
          </Text>
          <Text size={18}>
            I'm James Boushell, a professional full-stack developer. I've
            created and maintain this website to showcase my passion and
            expertise, as well as present my resume in a relevant way.
          </Text>
        </Box>
        {portfolioImages}
      </Grid.Col>
      <Grid.Col span={4}>
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

async function getPortfolioImageURLs(): Promise<string[]> {
  const url = `https://api.dribbble.com/v2/users/boushell/shots`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.DRIBBBLE_API_KEY}`,
      },
    });

    const shots = response.data;
    const imageUrls = shots.map((shot: any) => shot.images.normal);

    return imageUrls;
  } catch (error) {
    console.error('Error retrieving portfolio images:', error);
    return [];
  }
}
