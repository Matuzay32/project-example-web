'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Text, SimpleGrid, Stack, Heading } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Cursor3d from './Components/Cursor3d';
import BeautifulCard from './Components/BeautifulCard';

import HowWork from './Components/HowWork';
import Titles from './Components/Titles';

import { data } from '../app/constants/cards.js';

export default function Page() {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.2, // Controla la animación secuencial
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <Box height="100vh" width="100%" p={2}>
        <Hero></Hero>
        <Titles texto={['Connect', 'With Us']}></Titles>

        <SimpleGrid columns={{ sm: 1, md: 1, lg: 1 }} spacing={2}>
          {data?.map((item, i) => {
            return <Cards item={item} key={i}></Cards>;
          })}
        </SimpleGrid>

        <HowWork></HowWork>

        <Box w={'full'} h={'100vh'}>
          <Titles texto={['Payment', 'Methods']}></Titles>

          <Cursor3d></Cursor3d>
        </Box>
        <BeautifulCard></BeautifulCard>
      </Box>
    </>
  );
}
