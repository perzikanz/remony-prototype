import React from 'react';

import { askQuestions, correctAnswer, wrongAnswer } from '../../redux/action';
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
    this.randomPlay = this.randomPlay.bind(this);
    this.judgment = this.judgment.bind(this);
  }

  randomPlay() {
    if (!this.props.isQuestion) {
      const n = Math.floor(Math.random() * keyLevels.length);
      const correctKey = `${keyLevels[n]}3`;
      const src = `../src/audio/${correctKey}.mp3`;
      const audio = new Audio(src);
      audio.play();
      this.props.dispatch(askQuestions(correctKey));
    }
  }

  judgment(keyName) {
    if (this.props.isQuestion) {
      const src = `../src/audio/${keyName}.mp3`;
      const audio = new Audio(src);
      audio.play();
      if (keyName === this.props.correctKey) {
        this.props.dispatch(correctAnswer());
      } else {
        this.props.dispatch(wrongAnswer());
      }
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
        <span className="texts">{`判定 -> ${this.props.judgment}`}</span>
        <span className="texts">{`正答数 -> ${this.props.correctAnswer}`}</span>
        <Keyboad judgment={this.judgment} />
      </div>
    );
  }
}
