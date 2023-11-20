import React from 'react';
import { ChakraProvider, Box, Button } from '@chakra-ui/react';

const CircularButton = () => {
  return (
    <ChakraProvider>
      <Box p={5}>
        <Button
          size="lg" // You can adjust the size as needed
          borderRadius="full" // This will make the button circular
          colorScheme="teal" // Choose your desired color scheme
        >
          Click me
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default CircularButton;