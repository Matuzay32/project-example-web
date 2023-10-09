'use client';

// import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Button,
} from '@chakra-ui/react';

export default function Cards({ item }) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={20}
          pos={'relative'}
        >
          <Image
            src={
              'https://images.unsplash.com/photo-1515248137880-45e105b710e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2988&q=80'
            }
            fill
            alt="Example"
          />
        </Box>
        <Stack>
          <Heading
            mt={10}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {item.title}
          </Heading>
          <Text color={'gray.500'}>{item.description}</Text>
        </Stack>
        <Stack
          mt={6}
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={4}
          mb={4}
        >
          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('teal.400', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              backgroundColor: 'Teal',
            }}
          >
            Click
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
