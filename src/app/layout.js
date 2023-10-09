'use client';

// import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{ padding: 0, margin: 0 }}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
