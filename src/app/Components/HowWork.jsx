'use client';
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
  return (
    <Container
      borderRadius={'30px'}
      border={'1px solid Gray.50'}
      boxShadow={'dark-lg'}
      maxW="6xl"
      py={20}
      mt={10}
    >
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
            How we
          </Text>
          <br />
          <Text as={'span'} color={'teal.400'}>
            Work{' '}
          </Text>
        </Heading>
      </Stack>
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
          {overviewList.map((data) => (
            <Box key={data.id}>
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
          ))}
        </VStack>
        <Image
          boxSize={{ base: 'auto', md: 'lg' }}
          objectFit="contain"
          src="/captura.png"
          rounded="lg"
        />
      </Stack>
    </Container>
  );
};

export default HowWork;
