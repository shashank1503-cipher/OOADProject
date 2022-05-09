import React, { useContext } from 'react';
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
import { GiveQuizProvider } from './context/GiveQuizContext';
import PrivateRoute from './utils/PrivateRoute';
import ResultPage from './pages/ResultPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <GiveQuizProvider>
        <CreateQuizProvider>
          <Routes>
            <Route path="*" element={<NotFound />} />

            <Route path="/" element={<Homepage />} />
            <Route
              path="/create"
              element={
                <PrivateRoute>
                  <CreateQuiz />
                </PrivateRoute>
              }
            />
            <Route
              path="/createsuccess"
              element={
                <PrivateRoute>
                  <QuizConfirmation />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupCard />} />
            <Route
              path="/quizzes"
              element={
                <PrivateRoute>
                  <Quizzes />
                </PrivateRoute>
              }
            />
            <Route
              path="/quiz/:id"
              element={
                <PrivateRoute>
                  <QuizPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/results/:id"
              element={
                <PrivateRoute>
                  <ResultPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </CreateQuizProvider>
      </GiveQuizProvider>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
