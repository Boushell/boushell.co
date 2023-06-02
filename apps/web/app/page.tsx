import axios from 'axios';

import { LandingPage } from './landing-page';

export default async function HomePage() {
  return <LandingPage portfolioImages={await getPortfolioImageURLs()} />;
}

async function getPortfolioImageURLs(): Promise<string[]> {
  const url = `https://api.dribbble.com/v2/user/shots`;

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
