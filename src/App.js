import * as React from 'react';
import Navbar from './Navbar';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
