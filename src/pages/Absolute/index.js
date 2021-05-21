import { Absolute } from './Absolute';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const {
    correctAnswer,
    correctKey,
    isAskingQuestion,
    judgment,
    questionNum,
    endQuenstion,
  } = state.absolute;
  return {
    correctAnswer,
    correctKey,
    isAskingQuestion,
    judgment,
    questionNum,
    endQuenstion,
  };
};
const ConnectedAbsolute = connect(mapStateToProps)(Absolute);

export default ConnectedAbsolute;
