import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreateQuiz from './pages/CreateQuiz';
import Navbar from './components/Navbar';
import { CreateQuizProvider } from './context/CreateQuizContext';
import QuizConfirmation from './pages/QuizConfirmation';
import Login from './pages/Login';
import SignupCard from './pages/SignUp';
import Footer from './components/Footer';
import QuizPage from './pages/QuizPage';
import Quizzes from './pages/Quizzes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <CreateQuizProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/createsuccess" element={<QuizConfirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupCard />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
        </Routes>
      </CreateQuizProvider>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
