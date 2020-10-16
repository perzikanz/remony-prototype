import React from 'react';

import './absolute.css';

export default function Absolute() {
  return (
    <div>
      <h2>絶対音感クイズ(Absolute)</h2>
      <button
        className="button"
        onClick={() => {
          QuestionAbsolute();
        }}
      >
        もんだい
      </button>
    </div>
  );
}

/*
- ボタンが押されたらランダムで音を鳴らす、ド～シまで(？
- 回答者は鍵盤をクリックして答える
- 鍵盤をクリックすると音が鳴る・・？
*/
function QuestionAbsolute() {
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
  const level = Math.floor(Math.random() * keyLevels.length);
  const src = `../src/audio/${keyLevels[level]}3.mp3`;
  const audio = new Audio(src);
  audio.play();
}
