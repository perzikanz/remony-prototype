import React from 'react';
import './chord.css';

import DivKeyboard from 'react-piano-keyboard';

const activeKeys = ['c3', 'g3', 'ds3'];

export function Chord() {
  return (
    <div>
      <h2>Chord(コード演奏)</h2>
      <DivKeyboard
        keyboadLength={1}
        keybardWidth={400}
        firstScale={3}
        activeKey={activeKeys}
      />
    </div>
  );
}
