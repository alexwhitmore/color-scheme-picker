import * as React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

import { ChakraProvider } from '@chakra-ui/react';

function App({ Component }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
    </ChakraProvider>
  );
}

export default App;
