import React, { useState, useEffect } from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  VStack,
  Flex,
  Text,
  Image,
  Box,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Titles from './Titles';

const overviewList = [
  {
    id: 1,
    label: 'Contact us',
    subLabel: 'First, get in touch with us to discuss your needs.',
  },
  {
    id: 2,
    label: 'Schedule a meeting',
    subLabel: `Once we've communicated, let's schedule a meeting.`,
  },
  {
    id: 3,
    label: 'Define the project',
    subLabel: `During the meeting, we'll define the scope of the work.`,
  },
  {
    id: 4,
    label: 'Agree on pricing',
    subLabel: `Finally, we'll agree on the project cost and terms.`,
  },
];

const HowWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    // Marcamos que las animaciones de los elementos de la lista se han completado
    if (inView && !animationCompleted) {
      setAnimationCompleted(true);
    }
  }, [inView, animationCompleted]);

  return (
    <Container
      borderRadius={'30px'}
      border={'1px solid Gray.50'}
      boxShadow={'dark-lg'}
      maxW="6xl"
      py={20}
      mt={10}
    >
      <Titles texto={['How we', 'Work']}></Titles>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 0, md: 3 }}
        justifyContent="center"
        alignItems="center"
      >
        <VStack
          spacing={4}
          alignItems="flex-start"
          mb={{ base: 5, md: 0 }}
          maxW="md"
        >
          {overviewList.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: -20 }}
              animate={
                inView && animationCompleted
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -20 }
              }
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <Box ref={ref}>
                <HStack spacing={2}>
                  <Flex
                    fontWeight="bold"
                    boxShadow="md"
                    color="white"
                    bg="teal.400"
                    rounded="full"
                    justifyContent="center"
                    alignItems="center"
                    w={10}
                    h={10}
                  >
                    {data.id}
                  </Flex>
                  <Text fontSize="xl">{data.label}</Text>
                </HStack>
                <Text fontSize="md" color="gray.500" ml={12}>
                  {data.subLabel}
                </Text>
              </Box>
            </motion.div>
          ))}
        </VStack>
        {animationCompleted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <Image
              boxSize={{ base: 'auto', md: 'lg' }}
              objectFit="contain"
              src="/captura.png"
              rounded="lg"
            />
          </motion.div>
        )}
      </Stack>
    </Container>
  );
};

export default HowWork;
