import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = props => {
  return (
    <Link to="/">
      <Heading {...props}>Quizly</Heading>
    </Link>
  );
};

export default Logo;
