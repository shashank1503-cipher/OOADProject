import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

let Login = () => {
  let {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    login,
    loading,
    error,
  } = useContext(AuthContext);

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={error ? true : false}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={loginEmail}
                onChange={e => {
                  setLoginEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password" isInvalid={error ? true : false}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={loginPassword}
                onChange={e => {
                  setLoginPassword(e.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              ></Stack>
              <Button
                colorScheme={'blue'}
                variantColor={'blue'}
                onClick={login}
                isLoading={loading}
              >
                Sign in
              </Button>
              {error ? (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>Error!</AlertTitle>
                  <AlertDescription>{error} 😢 </AlertDescription>
                </Alert>
              ) : (
                <></>
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
