'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Text,
  SimpleGrid,
  Stack,
  Heading,
  Container,
} from '@chakra-ui/react';

import Planet from '../Components/Planet';

import Titles from '../Components/Titles';
import MissionVision from '../Components/MissionVision';
import CoreValues from '../Components/CoreValues';

export default function about() {
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
    <Container maxW={'full'} w={'full'} h={'100vh'} centerContent pt={'10rem'}>
      <CoreValues></CoreValues>
      <Planet></Planet>
      <MissionVision></MissionVision>
    </Container>
  );
}
