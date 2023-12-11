import {
  Box,
  Container,
  Stack,
  VStack,
  HStack,
  Text,
  Heading,
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Titles from '../Components/Titles';

export default function MissionVision() {
  const [visionMission, setVisionMission] = useState([
    {
      id: 1,
      text1: 'Vision',
      text2: 'Code Dreamers',
      content: `To be the leading technological development platform that transforms dreams and ideas into exceptional digital realities. At Code Dreamer, we envision a world where every entrepreneur, company, or innovator has access to cutting-edge technological solutions that exceed their expectations, driving progress and innovation across all sectors.`,
    },
    {
      id: 1,
      text1: 'Mission',
      text2: 'Code Dreamers',
      content: `At Code Dreamer, we are committed to bringing your dreams to life and turning your ideas into outstanding digital solutions. Our mission is to be your trusted partner throughout the entire process, from conception to implementation. We strive to provide comprehensive guidance, ensuring total, functional, and scalable integration. Our greatest strength lies in our dedication to completing each project in the best possible way, demonstrating excellence in every line of code and every detail.`,
    },
  ]);

  const maxContentHeight = visionMission.reduce((maxHeight, item) => {
    const contentHeight = item.content.split('\n').length * 2.5; // Adjust multiplier as needed
    return Math.max(maxHeight, contentHeight);
  }, 0);
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        w={'full'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        {visionMission.map((item, index, arr) => {
          return (
            <Stack
              h={`500px`} // Set the height to the maximum content height
              overflowY="auto" // Enable vertical scrolling if content exceeds the height
              key={`${index}-${item.text1}`}
              display={'flex'}
              justify={'center'}
              alignItems={'center'}
              p={10}
              backdropFilter={'blur(10px)'}
              borderRadius={'30px'}
              border={'1px solid Gray.50'}
              boxShadow={'dark-lg'}
              maxW="6xl"
              py={20}
              mt={10}
              flex={1}
              spacing={{ base: 5, md: 10 }}
            >
              <Titles
                texto={[item.text1, item.text2]}
                justifyContent={'center'}
                alignItems={'flex-start'}
              ></Titles>
              <Text color={'gray.500'}>{item.content}</Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
              ></Stack>
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
}
