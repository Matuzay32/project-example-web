import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Text, SimpleGrid, Stack, Heading } from '@chakra-ui/react';

export default function Titles({
  texto = ['Default Text', 'Default Text2'],
  alignItems = 'center',
  justifyContent = 'center',
}) {
  const [texto1, texto2] = texto;
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
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Stack
      mt={10}
      flex={1}
      spacing={{ base: 5, md: 10 }}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      <motion.div initial="hidden" animate="visible" variants={headingVariants}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
        >
          <motion.div variants={textVariants}>
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
              {texto1}
            </Text>
          </motion.div>
          <br />
          <motion.div variants={textVariants}>
            <Text as={'span'} color={'teal.400'}>
              {texto2}
            </Text>
          </motion.div>
        </Heading>
      </motion.div>
    </Stack>
  );
}
