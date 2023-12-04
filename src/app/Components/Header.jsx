// export default Header;
import React, { useState, useRef, useEffect } from 'react';
import {
  Image,
  Box,
  Heading,
  Flex,
  IconButton,
  useColorMode,
  Link,
  Container,
  HStack,
} from '@chakra-ui/react';
import { FiSun, FiMenu, FiX } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true,
};

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'About Us ', url: '/about' },
  { name: 'Contact', url: '/contact' },
];

const Header = (props) => {
  const [show, setShow] = useState(false);
  const headerRef = useRef(null);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => setShow(!show);

  return (
    <Container maxW="7xl" p={1}>
      <Flex
        boxShadow={'0px 0px 1px #181818'}
        borderRadius="2xl"
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        mt={3}
        ml={10}
        mr={10}
        padding="1.5rem"
        position="fixed"
        top="0"
        left="0"
        right="0"
        backdropFilter="blur(10px)"
        backgroundColor={
          colorMode === 'light'
            ? 'rgba(255, 255, 255, 0.8)'
            : 'rgba(0, 0, 0, 0.8)'
        }
        zIndex="999"
        ref={headerRef}
        {...props}
      >
        {/* BOTONES DE LUNA Y DE CRUZ */}
        <Flex
          w={'full'}
          justifyContent={'space-around'}
          align="center"
          mr={{ md: '15' }}
        >
          <HStack spacing={50} display={'flex'} justifyContent={'space-around'}>
            <Box
              cursor="pointer"
              display={{ sm: 'block', md: 'none' }}
              onClick={handleToggle}
            >
              {show ? (
                <FiX
                  fontSize="2.5rem"
                  color={colorMode === 'light' ? '#181818' : '#fff'}
                />
              ) : (
                <FiMenu
                  fontSize="2.5rem"
                  color={colorMode === 'light' ? '#181818' : '#fff'}
                />
              )}
            </Box>
            {/* <Box display={{ sm: 'block', md: 'none' }}>
              <IconButton
                aria-label="Color Mode"
                icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
                onClick={toggleColorMode}
                size="lg"
                isRound={true}
                {...iconProps}
              />
            </Box> */}

            <Box display={{ sm: 'block', md: 'none' }}>
              <Image
                boxSize={{ base: 'auto', md: 'lg' }}
                w={'50px'}
                h={'50px'}
                src="/planet.png"
                rounded="lg"
              />
            </Box>
          </HStack>
        </Flex>

        <Box
          display={[show ? 'flex' : 'none', show ? 'flex' : 'none', 'flex']}
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
          flexGrow={1}
        >
          {navLinks?.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              fontSize="lg"
              fontWeight="medium"
              color={colorMode === 'light' ? '#181818' : '#fff'}
              borderRadius="5px"
              mr={['0', '0', '3']}
              mt={['2', '2', '0']}
              padding={['0.7rem', '0.7rem', '0.4rem']}
              display={['block', 'block', 'auto']}
              _visited={{ outline: 'none' }}
              _hover={{
                color: '#4FD1C5',
                transform: 'scale(1.2)', // Escala del 110% en hover
                transition: 'all 0.3s ease',
                // background:
                //   colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#463d3de0',
                // color: '#fff',
              }}
              onClick={() => setShow(false)}
            >
              {link.name}
            </Link>
          ))}
        </Box>
        {/* 
        <Box
          _hover={{ boxShadow: '1px 1px 10px black, 1px 1px 10px white inset' }}
          borderRadius={'50%'}
          mt={[3, 3, 0]}
          display={['none', 'none', 'block']}
          position={{ sm: 'absolute', md: 'unset' }}
          top="3.5rem"
          right="5.5rem"
        >
          <IconButton
            aria-label="Color Mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
            onClick={toggleColorMode}
            size="lg"
            isRound={true}
            {...iconProps}
          />
        </Box> */}

        <Box display={['none', 'none', 'block']}>
          <Image
            h={'80px'}
            w={'80px'}
            objectFit="contain"
            src="/planet.png"
            rounded="lg"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Header;
