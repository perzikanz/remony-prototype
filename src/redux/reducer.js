import { CORRECT_ANSWER } from './action';

const initialState = {
  correctAnswer: 0,
};

export default function answer(state = initialState, action) {
  switch (action.type) {
    case CORRECT_ANSWER:
      const correctAnswer = state.correctAnswer + 1;
      return {
        ...state,
        correctAnswer: correctAnswer,
      };
    default:
      return state;
  }
}
