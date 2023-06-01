'use client';
import { Box } from '@mantine/core';

import css from './page.module.scss';

export default function HomePage() {
  return (
    <>
      <Box className={css.hero} bg="black" c="#ececec">
        <h1>👋 Hey there!</h1>
        <p>
          My name is James Boushell and I'm a professional full-stack developer!
          I've created and maintain this website to showcase some of the things
          that I am passionate about & to showcase my resume in a more topical
          manner.
        </p>
      </Box>

      <Box className={css.hero} bg="#ececec">
        <h2>🤓 Fun facts about this website</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          ab quibusdam porro nihil. Alias eum assumenda praesentium, in illo
          totam at? Quidem atque culpa nisi ab dolore adipisci veritatis
          expedita?
        </p>
      </Box>
    </>
  );
}
