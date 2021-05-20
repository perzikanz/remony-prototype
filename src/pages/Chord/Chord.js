import React from 'react';
import './chord.css';

import DivKeyboard from 'react-piano-keyboard';

export function Chord() {
  return (
    <div>
      <h2>Chord(コード演奏)</h2>
      <DivKeyboard keyboadLength={1} keybardWidth={560} />
    </div>
  );
}
