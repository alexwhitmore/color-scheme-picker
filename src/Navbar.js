import React, { useState } from 'react';
import {
  Center,
  Flex,
  Box,
  Spacer,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ChromePicker } from 'react-color';

const Navbar = () => {
  const [display, setDisplay] = useState('none');
  const [color, setColor] = useState('#1A202C');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModalClick = () => {
    onOpen();

    if (!showColorPicker) {
      setShowColorPicker((showColorPicker) => !showColorPicker);
    }
  };

  return (
    <div onClick={handleModalClick}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg='gray.600'
          style={{ boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }}>
          <ModalCloseButton color='gray.200' />
          <ModalBody style={{ borderRadius: '10px' }}>
            <Center>
              {showColorPicker && (
                <ChromePicker
                  color={color}
                  onChange={(updatedColor) => setColor(updatedColor.hex)}
                />
              )}
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Flex bg={color} color='white' style={{ textTransform: 'uppercase' }}>
        <Box p='5'>Color Selector</Box>
        <Spacer />
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <Box p='5'>About</Box>
          <Box p='5'>Portfolio</Box>
          <Box p='5'>Contact</Box>
        </Flex>
        <Flex align='center'>
          <IconButton
            aria-label='Open Menu'
            bg='gray.800'
            size='lg'
            mr={2}
            icon={<HamburgerIcon />}
            _hover={{ color: 'gray.400' }}
            display={['flex', 'flex', 'none', 'none']}
            onClick={() => setDisplay('flex')}
          />
        </Flex>
      </Flex>
      <Flex
        w='100vw'
        zIndex={20}
        bg='gray.200'
        h='100vh'
        pos='fixed'
        top='0'
        left='0'
        overflow='auto'
        direction='column'
        display={display}>
        <Flex justify='flex-end' mr={2} mt={2}>
          <IconButton icon={<CloseIcon />} onClick={() => setDisplay('none')} />
        </Flex>
        <Flex direction='column' align='center'>
          <Box p='5'>About</Box>
          <Box p='5'>Portfolio</Box>
          <Box p='5'>Contact</Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
