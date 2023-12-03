'use client';

// import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{ padding: 0, margin: 0 }}>
        <ChakraProvider>
          <Header></Header>

          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
