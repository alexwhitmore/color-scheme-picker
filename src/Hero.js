import React from 'react';
import { Container, Button, Heading, Text, Center } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Center bg='gray.800' color='gray.200' style={{ height: '92.8vh' }}>
      <Container style={{ marginTop: '-70px' }}>
        <Heading
          mb={10}
          bgGradient='linear(to-l, cyan.100, cyan.500)'
          bgClip='text'>
          Color Scheme Picker
        </Heading>
        <Text mb={10}>
          Click anything on the page to choose a color and plan out your next
          application's color scheme!
        </Text>
        <Button
          style={{ textTransform: 'uppercase' }}
          colorScheme='cyan'
          color='gray.800'>
          Learn More
        </Button>
      </Container>
    </Center>
  );
};

export default Hero;
