import React from 'react';
import type { NextPage } from 'next';
import { useSSR } from '@nextui-org/react';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Hero } from '../components/hero';
import { Trusted } from '../components/trusted';
import { Box } from '../components/styles/box';
import { Features3 } from '../components/features3';
import { Testimonials } from '../components/testimonials';
import { Statistics } from '../components/statistics';
import { Plans } from '../components/plans';
import { Faq } from '../components/faq';
import { Trial } from '../components/trials';
import { Footer } from '../components/footer';

const Home: NextPage = () => {
  const { isBrowser } = useSSR();

  return isBrowser ? (
    <Layout>
      <Nav />
      <Box as='main'>
        <Hero />
        <Trusted />
        <Features3 />
        <Testimonials />
        <Statistics />
        <Plans />
        <Faq />
        <Trial />
        <Footer />
      </Box>
    </Layout>
  ) : null;
};

export default Home;
