import { createContext, useState } from 'react';

const CreateQuizContext = createContext();

export default CreateQuizContext;

export const CreateQuizProvider = ({ children }) => {
  const [questionBoxData, setQuestionBoxData] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  let contextData = {
    questionBoxData: questionBoxData,
    setQuestionBoxData: setQuestionBoxData,
    isError: isError,
    setIsError: setIsError,
    errorMessage: errorMessage,
    setErrorMessage: setErrorMessage,
    currentQuestionNumber: currentQuestionNumber,
    setCurrentQuestionNumber: setCurrentQuestionNumber,
    isSuccessfull:isSuccessfull,
    setIsSuccessfulls:setIsSuccessfull
  };

  return (
    <CreateQuizContext.Provider value={contextData}>
      {children}
    </CreateQuizContext.Provider>
  );
};
