import { Absolute } from './Absolute';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { correctAnswer, correctKey, isQuestion, judgment } = state;
  return { correctAnswer, correctKey, isQuestion, judgment };
};
const ConnectedAbsolute = connect(mapStateToProps)(Absolute);

export default ConnectedAbsolute;
