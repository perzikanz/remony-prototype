import {
  ASK_QUESTIONS,
  CORRECT_ANSWER,
  WRONG_ANSWER,
  END_QUENSTION,
  ONE_MORE_PLAY,
  INITIAL_AUDIO,
} from './action';

const initialState = {
  correctAnswer: 0,
  correctKey: '',
  isAskingQuestion: false,
  judgment: '',
  questionNum: 0,
  endQuenstion: false,
};

export default function answer(state = initialState, action) {
  switch (action.type) {
    case INITIAL_AUDIO: {
      const audio = new Audio();
      audio.addEventListener();
      audio.src = '';
      return {
        ...state,
      };
    }
    case ASK_QUESTIONS: {
      const correctKey = action.payload.correctKey;
      return {
        ...state,
        correctKey: correctKey,
        isAskingQuestion: true,
        judgment: '',
      };
    }
    case CORRECT_ANSWER: {
      const questionNum = state.questionNum + 1;
      const correctAnswer = state.correctAnswer + 1;
      return {
        ...state,
        correctAnswer: correctAnswer,
        isAskingQuestion: false,
        judgment: '正解',
        questionNum: questionNum,
      };
    }
    case WRONG_ANSWER: {
      const questionNum = state.questionNum + 1;
      return {
        ...state,
        isAskingQuestion: false,
        judgment: '不正解',
        questionNum: questionNum,
      };
    }
    case END_QUENSTION: {
      return {
        ...state,
        endQuenstion: true,
      };
    }
    case ONE_MORE_PLAY: {
      return {
        correctAnswer: 0,
        correctKey: '',
        isAskingQuestion: false,
        judgment: '',
        questionNum: 0,
        endQuenstion: false,
      };
    }
    default:
      return state;
  }
}
