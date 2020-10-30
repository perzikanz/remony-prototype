import { Question } from './Question';
import { connect } from 'react-redux';

const ConnectedQuestion = connect()(Question);

export default ConnectedQuestion;
