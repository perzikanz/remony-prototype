import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setScale } from '../../redux/action';

type Props = { dispatch: Dispatch };

const PickScale: React.FC<Props> = (props) => {
  return (
    <>
      <h3 className='h3'>スケールを選ぶ</h3>
      <ul className='scale_list'>
        <li className='scale_list_item'>
          <button
            className='scale_button'
            onClick={() => {
              props.dispatch(setScale('c'));
            }}
          >
            C
          </button>
        </li>
        <li className='scale_list_item'>
          <button
            className='scale_button'
            onClick={() => {
              props.dispatch(setScale('d'));
            }}
          >
            D
          </button>
        </li>
        <li className='scale_list_item'>
          <button
            className='scale_button'
            onClick={() => {
              props.dispatch(setScale('e'));
            }}
          >
            E
          </button>
        </li>
        <li className='scale_list_item'>
          <button
            className='scale_button'
            onClick={() => {
              props.dispatch(setScale('f'));
            }}
          >
            F
          </button>
        </li>
        <li className='scale_list_item'>
          <button
            className='scale_button'
            onClick={() => {
              props.dispatch(setScale('g'));
            }}
          >
            G
          </button>
        </li>
        <li className='scale_list_item'>
          <button
            className='scale_button'
            onClick={() => {
              props.dispatch(setScale('a'));
            }}
          >
            A
          </button>
        </li>
        <li className='scale_list_item'>
          <button
            className='scale_button'
            onClick={() => {
              props.dispatch(setScale('b'));
            }}
          >
            B
          </button>
        </li>
      </ul>
    </>
  );
};

type State = {
  chord: { scale: string };
};

const mapStateToProps = (state: State) => {
  const { scale } = state.chord;
  return { scale };
};

const ConnectedPickScale = connect(mapStateToProps)(PickScale);

export default ConnectedPickScale;
