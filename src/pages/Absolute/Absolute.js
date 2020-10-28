import React from 'react';

import { correctAnswer } from '../../redux/action';
import { Keyboad } from '../../piano/Keyboad';
import './absolute.css';

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

export class Absolute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: '0',
      judg: 'aaa',
      isPlayed: false,
    };

    this.judgment = this.judgment.bind(this);
  }

  randomPlay() {
    if (!this.state.isPlayed) {
      const n = Math.floor(Math.random() * keyLevels.length);
      this.state.correct = `${keyLevels[n]}3`;
      const src = `../src/audio/${this.state.correct}.mp3`;
      const audio = new Audio(src);
      audio.play();
      this.state.isPlayed = true;
    }
  }

  judgment(keyName) {
    if ((keyName === this.state.correct) & this.state.isPlayed) {
      this.props.dispatch(correctAnswer());
      this.state.judg = '正解';
      console.log(this.state.judg);
      this.state.isPlayed = false;
    } else {
      this.state.judg = '不正解';
      console.log(this.state.judg);
      this.state.isPlayed = false;
    }
  }

  render() {
    return (
      <div>
        <h2>絶対音感クイズ(Absolute)</h2>
        <button
          className="button"
          onClick={() => {
            this.randomPlay();
          }}
        >
          もんだい
        </button>
        <span>{`正答数-> ${this.props.correctAnswer}`}</span>
        <Keyboad judgment={this.judgment} />
      </div>
    );
  }
}
