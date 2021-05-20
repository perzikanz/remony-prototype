import React from 'react';
import './chord.css';

import DivKeyboard from 'react-piano-keyboard';

export function Chord() {
  const activeKeys = ['c3', 'g3', 'ds3'];
  return (
    <>
      <h2>Chord(コード演奏)</h2>
      <DivKeyboard
        keyboadLength={1}
        keybardWidth={400}
        firstScale={3}
        activeKey={activeKeys}
      />
      <ChooseScale />
    </>
  );
}

function ChooseScale() {
  return (
    <>
      <h3 className='h3'>スケールを選ぶ</h3>
      <ul className='scale_list'>
        <li className='scale_list_item'>
          <button className='scale_button'>C</button>
        </li>
        <li className='scale_list_item'>
          <button className='scale_button'>D</button>
        </li>
        <li className='scale_list_item'>
          <button className='scale_button'>E</button>
        </li>
        <li className='scale_list_item'>
          <button className='scale_button'>F</button>
        </li>
        <li className='scale_list_item'>
          <button className='scale_button'>G</button>
        </li>
        <li className='scale_list_item'>
          <button className='scale_button'>A</button>
        </li>
        <li className='scale_list_item'>
          <button className='scale_button'>B</button>
        </li>
      </ul>
    </>
  );
}
