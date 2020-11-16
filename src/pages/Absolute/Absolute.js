import React from 'react';

import {
  askQuestions,
  correctAnswer,
  wrongAnswer,
  endQuestion,
  oneMore,
} from '../../redux/action';
import { Keyboad } from '../../piano/Keyboad';
import './absolute.css';

import { KEY_LEVELS } from '../../piano/constant';

const QUESTION_NUM = 10;

export class Absolute extends React.Component {
  constructor(props) {
    super(props);
    this.randomPlay = this.randomPlay.bind(this);
    this.judgment = this.judgment.bind(this);
  }

  randomPlay() {
    if (!this.props.isAskingQuestion) {
      const n = Math.floor(Math.random() * KEY_LEVELS.length);
      const correctKey = `${KEY_LEVELS[n]}3`;
      const src = `../src/audio/${correctKey}.mp3`;
      const audio = new Audio(src);
      audio.play();
      this.props.dispatch(askQuestions(correctKey));
    }
  }

  judgment(keyName) {
    const src = `../src/audio/${keyName}.mp3`;
    const audio = new Audio(src);
    audio.play();
    if (this.props.isAskingQuestion) {
      if (keyName === this.props.correctKey) {
        this.props.dispatch(correctAnswer());
      } else {
        this.props.dispatch(wrongAnswer());
      }
    }
    if (this.props.questionNum === QUESTION_NUM - 1) {
      this.props.dispatch(endQuestion());
    }
  }

  render() {
    return (
      <div>
        <h2>絶対音感クイズ(Absolute)</h2>
        {this.props.endQuenstion ? (
          <>
            <p>結果は・・・</p>
            <p>{`10問中 ${this.props.correctAnswer}問正解！`}</p>
            <button
              className="oneMore"
              onClick={() => {
                this.props.dispatch(oneMore());
              }}
            >
              もう一回
            </button>
          </>
        ) : (
          <>
            <button
              className="button"
              onClick={() => {
                this.randomPlay();
              }}
            >
              もんだい
            </button>

            <span className="texts">{`${this.props.judgment}`}</span>
            {this.props.isAskingQuestion ? (
              <span className="texts">正解は ...</span>
            ) : (
              <span className="texts">{`正解は ${this.props.correctKey}`}</span>
            )}
            <span className="texts">{`正答数 -> ${this.props.correctAnswer}`}</span>

            <Keyboad judgment={this.judgment} />
          </>
        )}
      </div>
    );
  }
}
