'use client';
import React from 'react';
import { Box, Text, SimpleGrid, Stack, Heading } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Cursor3d from './Components/Cursor3d';
import BeautifulCard from './Components/BeautifulCard';

import HowWork from './Components/HowWork';
import { data } from '../app/constants/cards.js';

export default function Page() {
  return (
    <>
      <Box height="100vh" width="100%" p={2}>
        <Hero></Hero>
        <Stack
          mt={10}
          mb={10}
          flex={1}
          spacing={{ base: 5, md: 10 }}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'teal.400',
                zIndex: -1,
              }}
            >
              Connect
            </Text>
            <br />
            <Text as={'span'} color={'teal.400'}>
              With Us
            </Text>
          </Heading>
        </Stack>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={2}>
          {data?.map((item, i) => {
            return <Cards item={item} key={i}></Cards>;
          })}
        </SimpleGrid>

        <HowWork></HowWork>

        <Box w={'full'} h={'100vh'}>
          <Stack
            mt={100}
            flex={1}
            spacing={{ base: 5, md: 10 }}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'teal.400',
                  zIndex: -1,
                }}
              >
                Payment
              </Text>
              <br />
              <Text as={'span'} color={'teal.400'}>
                Methods{' '}
              </Text>
            </Heading>
          </Stack>
          <Cursor3d></Cursor3d>
        </Box>
        <BeautifulCard></BeautifulCard>
      </Box>
    </>
  );
}
