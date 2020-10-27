import React from 'react';

import { correctAnswer } from '../../redux/action';
import { Keyboad } from '../../piano/Keyboad';
import './absolute.css';

export class Absolute extends React.Component {
  constructor(props) {
    super(props);
  }
  randomPlay() {
    const keyLevels = [
      'c',
      'd',
      'e',
      'f',
      'g',
      'a',
      'b',
      'cs',
      'ds',
      'fs',
      'gs',
      'as',
    ];
    const n = Math.floor(Math.random() * keyLevels.length);
    const src = `../src/audio/${keyLevels[n]}3.mp3`;
    const audio = new Audio(src);
    audio.play();
  }

  render() {
    return (
      <div>
        <h2>絶対音感クイズ(Absolute)</h2>
        <button
          className="button"
          onClick={() => {
            randomPlay();
          }}
        >
          もんだい
        </button>
        <Keyboad />
      </div>
    );
  }
}
