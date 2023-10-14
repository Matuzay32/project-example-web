import React, { useState } from 'react';
import {
  Box,
  Text,
  Center,
  Icon,
  Stack,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaCreditCard, FaPaypal, FaBitcoin } from 'react-icons/fa';

const BeautifulCard = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      name: 'Credit Card',
      description: 'We accept credit cards for online payments.',
      icon: <FaCreditCard />,
    },
    {
      name: 'PayPal',
      description: 'Securely pay with your PayPal account.',
      icon: <FaPaypal />,
    },
    {
      name: 'Bitcoin',
      description: 'Use Bitcoin for cryptocurrency payments.',
      icon: <FaBitcoin />,
    },
    // Agrega más métodos de pago con sus respectivos íconos
  ]);

  return (
    <Box p={5} w={'full'}>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 3 }} spacing={2}>
        {paymentMethods.map((method, index) => (
          <Box
            key={index}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            p={4}
            m={4}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="md"
            position="relative"
          >
            <Center>
              <Text color={'teal'} fontSize={100}>
                {method.icon}
              </Text>
            </Center>
            <Stack mt={3}>
              <Heading fontSize="xl" textAlign="center" color="teal">
                {method.name}
              </Heading>
              <Text fontSize="md" color="gray.600" textAlign="center">
                {method.description}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BeautifulCard;
