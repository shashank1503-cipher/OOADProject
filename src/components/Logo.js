import { Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = props => {
  return (
    <Link to="/">
      <Text {...props}>Quizly</Text>
    </Link>
  );
};

export default Logo;
