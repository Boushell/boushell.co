'use client';
import { ReactNode } from 'react';

import { Badge, Flex, Grid, List, Text } from '@mantine/core';

import css from './page.module.scss';

export default function ResumePage() {
  return (
    <>
      <Text size={40} weight="bold" className={css.name}>
        James Boushell
      </Text>
      <Text size={20} weight="bolder" color="cyan" mb="xl">
        Full Stack Developer
      </Text>

      <Grid gutter="xl">
        <Grid.Col span={3}>
          <InfoBlock title="Basic Info">
            <InfoBlock subtitle="📞 Phone" content="(609) 414 2037" />
            <InfoBlock subtitle="📧 Email" content="james@boushell.co" />
            <InfoBlock subtitle="💻 Website" content="Probably this one :D?" />
          </InfoBlock>
          <InfoBlock title="🎓 Education">
            <InfoBlock
              subtitle="Rider University"
              date="2019-2021"
              content="Bachelor’s Computer Science"
            >
              <Badge color="cyan" size="sm" w={75} variant="filled">
                GPA: 3.7
              </Badge>
            </InfoBlock>
            <InfoBlock
              subtitle="Mercer County Community College"
              date="2016 - 2018"
              content="Associate’s Computer Science"
            >
              <Badge color="cyan" size="sm" w={75} variant="filled">
                GPA: 3.5
              </Badge>
            </InfoBlock>
          </InfoBlock>
          <InfoBlock
            title="🤺 Skills"
            content="Typescript, JavaScript, Node.js, Python, C++, C#, Java, Spring, Express, MySQL, MongoDB, PostgreSQL, Firestore, Angular, React, React Native, AWS, GCP, Git, HTML, SCSS"
          />
        </Grid.Col>
        <Grid.Col span={9}>
          <InfoBlock title="📈 Professional Experience">
            <InfoBlock
              subtitle="SOLV Energy / Software Developer"
              date="July 2021 - Present"
            >
              <List ml="sm">
                <List.Item>
                  Proficient in a comprehensive tech stack: Typescript, React,
                  React Native, Node.js, Nx, Nest.js, Typeorm, Postgresql, SCSS,
                  and AWS.
                </List.Item>
                <List.Item>
                  Devised and implemented critical software components,
                  delivering end-to-end solutions from frontend to backend.
                </List.Item>
                <List.Item>
                  Collaborated within a dynamic Agile team, contributing to
                  swift, iterative software releases.
                </List.Item>
                <List.Item>
                  Leveraged Git for rigorous version control, peer reviewing,
                  and promoting a collaborative codebase.
                </List.Item>
                <List.Item>
                  Proactively initiated code and design enhancements, driving
                  software quality and maintainability.
                </List.Item>
                <List.Item>
                  Delivered solutions aligned with the principles of clean code
                  and design patterns to ensure a scalable and robust
                  application architecture.
                </List.Item>
              </List>
            </InfoBlock>

            <InfoBlock
              subtitle="WUFU LTD / Full Stack Developer"
              date="December 2020 - January 2022"
            >
              <List ml="sm">
                <List.Item>
                  Engineered a robust web application enabling creators to
                  distribute premium access private content, fostering creative
                  enterprise.
                </List.Item>
                <List.Item>
                  Deployed technical prowess in Javascript/Typescript with
                  Angular10 + Universal, Node.js, and Firebase frameworks to
                  build seamless application experiences.
                </List.Item>
                <List.Item>
                  Devised secure RESTful API with Express to efficiently manage
                  subscription-based transactions, one-time payments, and secure
                  media transfer.
                </List.Item>
                <List.Item>
                  Leveraged GCP for efficient web application deployment,
                  comprehensive media storage, task scheduling, and continuous
                  performance monitoring.
                </List.Item>
                <List.Item>
                  Established strong security practices, ensuring data integrity
                  and compliance with privacy standards.
                </List.Item>
              </List>
            </InfoBlock>

            <InfoBlock
              subtitle="Mentorch / Full Stack Developer"
              date="November 2018 - January 2021"
            >
              <List ml="sm">
                <List.Item>
                  Conceptualized, designed, and deployed Mentorch.app, an
                  innovative web app promoting mentorship and personal
                  development.
                </List.Item>
                <List.Item>
                  Leveraged expertise in Javascript/Typescript with Angular10 +
                  Universal, Node.js, and Firebase frameworks to build
                  interactive, user-focused application experiences.
                </List.Item>
                <List.Item>
                  Developed an efficient RESTful API using Node.js to serve as a
                  reliable interface for application interactions.
                </List.Item>
                <List.Item>
                  Engineered robust data structures with NoSQL database Google
                  Firestore, ensuring data integrity and rapid access.
                </List.Item>
                <List.Item>
                  Utilized Git for rigorous version control, facilitating
                  seamless environment testing and codebase stability.
                </List.Item>
                <List.Item>
                  Executed successful deployments and performance monitoring on
                  Google Cloud Platform (GCP), ensuring high-availability and
                  scalability of the application.
                </List.Item>
                <List.Item>
                  Demonstrated leadership by collaborating with a small team to
                  address workflow issues, bug resolution, and application
                  optimizations, thereby enhancing user engagement and
                  satisfaction.
                </List.Item>
                <List.Item>
                  Implemented Agile Development methodologies to ensure
                  efficient, high-quality software iterations and timely
                  delivery.
                </List.Item>
                <List.Item>
                  Oversaw full software lifecycle management, from requirements
                  gathering and architecture design, to development, testing,
                  deployment, and maintenance.
                </List.Item>
              </List>
            </InfoBlock>
          </InfoBlock>
        </Grid.Col>
      </Grid>
    </>
  );
}

function InfoBlock({
  title,
  subtitle,
  date,
  content,
  children,
}: {
  title?: string;
  subtitle?: string;
  date?: string;
  content?: string;
  children?: ReactNode;
}) {
  return (
    <Flex direction="column" mb={title ? 'sm' : 'lg'}>
      {title && (
        <Flex justify="space-between">
          <Text weight="bolder" size="xl" mb="xs">
            {title}
          </Text>
        </Flex>
      )}
      {subtitle && (
        <Flex justify="space-between">
          <Text weight="bold" size="md" color="cyan" lh={1}>
            {subtitle}
          </Text>
          {date && (
            <Text fs="italic" size={12} color="gray">
              {date}
            </Text>
          )}
        </Flex>
      )}
      {content && (
        <Text lh={1.3} mb={5}>
          {content}
        </Text>
      )}
      {children}
    </Flex>
  );
}
