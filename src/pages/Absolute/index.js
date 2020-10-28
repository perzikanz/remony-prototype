import { Absolute } from './Absolute';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { correctAnswer } = state;
  return { correctAnswer };
};
const ConnectedAbsolute = connect(mapStateToProps)(Absolute);

export default ConnectedAbsolute;
