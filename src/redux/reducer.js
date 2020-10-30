import { AUK_QUESTIONS, CORRECT_ANSWER, WRONG_ANSWER } from './action';

const initialState = {
  correctAnswer: 0,
  correctKey: '',
  isQuestion: false,
  judgment: '',
};

export default function answer(state = initialState, action) {
  switch (action.type) {
    case AUK_QUESTIONS:
      const correctKey = action.payload.correctKey;
      return {
        ...state,
        correctKey: correctKey,
        isQuestion: true,
        judgment: '',
      };
    case CORRECT_ANSWER:
      const incrementAnswer = state.correctAnswer + 1;
      return {
        ...state,
        correctAnswer: incrementAnswer,
        isQuestion: false,
        judgment: '正解',
      };
    case WRONG_ANSWER:
      return {
        ...state,
        isQuestion: false,
        judgment: '不正解',
      };
    default:
      return state;
  }
}
