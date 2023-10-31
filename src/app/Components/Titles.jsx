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
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Stack
      mt={10}
      flex={1}
      spacing={{ base: 5, md: 10 }}
      alignItems={alignItems}
      justifyContent={justifyContent}
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={headingVariants}
      >
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
