import React from 'react';
import Titles from './Titles';
import {
  Box,
  chakra,
  Container,
  Link,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaRegNewspaper } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { IconType } from 'react-icons';

const milestones = [
  {
    id: 1,
    title: 'Excellence',
    icon: FaRegNewspaper, // Puedes ajustar el valor del icono según tus necesidades
    description:
      'We strive for perfection in every project, surpassing expectations and setting quality standards.',
  },
  {
    id: 2,
    title: 'Collaboration',
    icon: FaRegNewspaper,
    description:
      'We believe in the power of teamwork and close collaboration with our clients to achieve joint success.',
  },
  {
    id: 3,
    title: 'Innovation',
    icon: FaRegNewspaper,
    description:
      'We embrace creativity and innovation, constantly adopting new technologies to stay at the forefront.',
  },
  {
    id: 4,
    title: 'Adaptability',
    icon: FaRegNewspaper,
    description:
      'We adapt to the specific needs of each client and their business models, ensuring customized and efficient solutions.',
  },
  {
    id: 5,
    title: 'Commitment',
    icon: FaRegNewspaper,
    description:
      'We are committed to the success of our clients and work tirelessly to achieve outstanding results.',
  },
];

export default function CoreValues() {
  return (
    <>
      <Box w={'full'}>
        <Box
          w={'full'}
          h={'auto'}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
        >
          <Titles texto={['Core', 'Values']}></Titles>
        </Box>

        <Milestones></Milestones>
      </Box>
    </>
  );
}

const Milestones = () => {
  return (
    <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
      {milestones.map((milestone, index) => (
        <Flex key={index} mb="10px">
          <LineWithDot />
          <Card {...milestone} />
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ title, description, icon }) => {
  return (
    <HStack
      p={{ base: 3, sm: 6 }}
      boxShadow={'0px 0px 1px #181818'}
      backdropFilter="blur(10px)"
      borderRadius="2xl"
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
    >
      <Icon as={icon} w={12} h={12} color="teal.400" />
      <Box>
        <HStack spacing={2} mb={1}></HStack>
        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            as={Link}
            _hover={{ color: 'teal.400' }}
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {title}
          </chakra.h1>
          <Text fontSize="md" noOfLines={2}>
            {description}
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(253, 255, 255)"
          borderRadius="100px"
          border="3px solid rgb(4, 180, 180)"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};
