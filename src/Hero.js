import React, { useState } from 'react';
import {
  Container,
  Button,
  Heading,
  Text,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { ChromePicker } from 'react-color';

const Hero = () => {
  const [color, setColor] = useState('#00B5D8');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModalClick = () => {
    if (!showColorPicker) {
      onOpen();
      setShowColorPicker((showColorPicker) => !showColorPicker);
      console.log('clicked');
    }
    setShowColorPicker(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg='gray.600'
          style={{ boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }}>
          <ModalCloseButton color='gray.200' />
          <ModalBody style={{ borderRadius: '10px' }}>
            <Center>
              {isOpen && (
                <ChromePicker
                  color={color}
                  onChange={(updatedColor) => setColor(updatedColor.hex)}
                />
              )}
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Center bg='gray.800' color='gray.200' style={{ height: '92.8vh' }}>
        <Container style={{ marginTop: '-70px' }}>
          <Heading mb={10} color={color} onClick={handleModalClick}>
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
    </>
  );
};

export default Hero;
