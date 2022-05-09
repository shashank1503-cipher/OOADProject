import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

let SignupCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  let {
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    register,
    loading,
    error,
  } = useContext(AuthContext);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
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
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={e => {
                      setFirstName(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={e => {
                      setLastName(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={registerEmail}
                onChange={e => {
                  setRegisterEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={registerPassword}
                  onChange={e => {
                    setRegisterPassword(e.target.value);
                  }}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                colorScheme={'blue'}
                variantColor={'blue'}
                isLoading={loading}
                onClick={register}
              >
                Sign up
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
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link to="/login">
                  <Text color={'blue.400'}>Login</Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
export default SignupCard;
