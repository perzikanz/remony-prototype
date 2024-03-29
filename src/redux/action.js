export const INITIAL_AUDIO = 'INITIAL_AUDIO';
export const ASK_QUESTIONS = 'ASK_QUESTIONS';
export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const WRONG_ANSWER = 'WRONG_ANSWER';
export const END_QUENSTION = 'END_QUENSTION';
export const ONE_MORE_PLAY = 'ONE_MORE_PLAY';

export const initialAudio = () => {
  return {
    type: INITIAL_AUDIO,
  };
};

export const askQuestions = (correctKey) => {
  return {
    type: ASK_QUESTIONS,
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

export const endQuestion = () => {
  return {
    type: END_QUENSTION,
  };
};

export const oneMore = () => {
  return {
    type: ONE_MORE_PLAY,
  };
};
