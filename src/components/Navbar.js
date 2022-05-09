import { Button, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import AuthContext from '../context/AuthContext';
import Logo from './Logo';

const Navbar = () => {
  let { user, logout } = useContext(AuthContext);
  return (
    <Flex justifyContent={'space-between'} p={4} wrap={'wrap'}>
      <Logo pl={10} fontSize={'3xl'} />
      <Flex justifyContent={'flex-end'}>
        {user ? (
          <Button variant={'outline'} onClick={logout}>
            Logout
          </Button>
        ) : (
          <>
            <Link to="/signup">
              <Button variant={'outline'} mr={5}>
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button variant={'outline'} mr={5}>
                Login
              </Button>
            </Link>
          </>
        )}

        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};

export default Navbar;
