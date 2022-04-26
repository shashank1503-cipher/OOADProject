import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreateQuiz from './pages/CreateQuiz';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateQuiz />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
