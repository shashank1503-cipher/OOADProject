import { createContext, useState } from 'react';

const GiveQuizContext = createContext();

export default GiveQuizContext;

export const GiveQuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  let contextData = {
    answers: answers,
    setAnswers: setAnswers,
    currentQuestionNumber,
    setCurrentQuestionNumber,
  };

  return (
    <GiveQuizContext.Provider value={contextData}>
      {children}
    </GiveQuizContext.Provider>
  );
};
