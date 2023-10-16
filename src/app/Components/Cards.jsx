import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { FaTimes, FaCog } from 'react-icons/fa'; // Importa el icono de cerrar y el icono de engranaje (o lámpara)

export default function Cards({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={'white'}
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
              src="https://images.unsplash.com/photo-1515248137880-45e105b710e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2988&q=80"
              alt="Example"
            />
          </Box>
          <Stack>
            <Heading
              mt={10}
              color={'gray.700'}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {/* Icono de engranaje (o lámpara) */}
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
              onClick={() => onOpen()}
              w={'full'}
              mt={8}
              bg={'teal.400'}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
                backgroundColor: 'Teal',
              }}
            >
              {item?.button}
            </Button>
          </Stack>
        </Box>
      </Center>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          isCentered={true} // Agregar esta línea
          borderRadius="10px"
          bg="white"
          boxShadow="lg"
          maxW="600px"
        >
          <ModalHeader
            fontSize="2xl"
            color="teal.500"
            borderBottom="1px solid teal"
            pb={4}
            display="flex"
            alignItems="center" // Centra el texto verticalmente con el icono
            justifyContent="space-between" // Espaciado entre el título y el icono
          >
            <Text w={'50%'} color={'teal'} fontSize={60}>
              <FaCog />
            </Text>
            {item.modal.title}
            <FaTimes onClick={onClose} style={{ cursor: 'pointer' }} />{' '}
            {/* Icono de cerrar */}
          </ModalHeader>
          <ModalBody>
            <Box
              // border={'1px solid #38B2AC              '}
              rounded={'3xl'}
              shadow={'lg'}
              p={5}
            >
              <Text color="gray.500" fontSize="lg">
                {item.modal.content}
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              _hover={{ bg: 'teal.600' }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
