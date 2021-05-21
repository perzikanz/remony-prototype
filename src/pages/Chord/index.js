import { Chord } from './Chord';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { scale, activeKeys } = state.chord;
  return { scale, activeKeys };
};

const ConnectedChord = connect(mapStateToProps)(Chord);

export default ConnectedChord;
