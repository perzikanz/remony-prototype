export const AUK_QUESTIONS = 'AUK_QUESTIONS';
export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const WRONG_ANSWER = 'WRONG_ANSWER';

export const askQuestions = (correctKey) => {
  return {
    type: AUK_QUESTIONS,
    payload: {
      correctKey,
    },
  };
};

export const correctAnswer = () => {
  return {
    type: CORRECT_ANSWER,
  };
};

export const wrongAnswer = () => {
  return {
    type: WRONG_ANSWER,
  };
};
