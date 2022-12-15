import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="navbar">
      <div className="burger">
        <Button
          colorScheme="linkedin"
          borderRadius={'full'}
          height={'50px'}
          width={'50px'}
          marginRight={'1rem'}
          onClick={onOpen}
        >
          <GiHamburgerMenu />
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <button variant={'ghost'}>
                  <Link to={'/Home'}>Home</Link>
                </button>
                <button variant={'ghost'}>
                  <Link to={'/videos'}>Videos</Link>
                </button>
                <button variant={'ghost'}>
                  <Link to={'/videos?category=free'}>Free Videos</Link>
                </button>
                <button variant={'ghost'}>
                  <Link to={'/uploadVideos'}>Upload Videos</Link>
                </button>
              </VStack>
            </DrawerBody>

            <DrawerFooter w={'full'} justifyContent={'space-evenly'}>
              <Button variant={'solid'} colorScheme={'linkedin'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button variant={'outline'} colorScheme={'linkedin'}>
                <Link to={'/signUp'}>Sign Up</Link>
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <ColorModeSwitcher borderRadius={'full'} height={'50px'} width={'50px'} />
    </div>
  );
};

export default Navbar;
