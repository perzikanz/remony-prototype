import React from 'react';
import './Keyboard.css';

import {
  OCTAVE_NUM,
  WHITE_KEY_NUM,
  BLUCK_KEY_NUM,
  WHITE_KEY_WIDTH,
  WHITE_KEY_HEIGHT,
  WHITE_KEY_LEVEL,
  BLACK_KEY_WIDTH,
  BLACK_KEY_HEIGHT,
  BLACK_KEY_SPASE,
  BLACK_KEY_LEVEL,
} from './constant';

export function Keyboard(props) {
  let whiteKeys = [];
  let whiteX = 0;
  for (let i = 0; i < WHITE_KEY_NUM; i++) {
    const keyName = `${WHITE_KEY_LEVEL[i]}3`;
    const whiteKey = (
      <rect
        x={whiteX}
        y={0}
        width={WHITE_KEY_WIDTH}
        height={WHITE_KEY_HEIGHT}
        className='white'
        key={keyName}
        onClick={() => {
          props.judgment(keyName);
        }}
      />
    );
    whiteKeys.push(whiteKey);
    whiteX = whiteX + 80;
  }

  let blackKeys = [];
  let blackX = 0;
  blackX = blackX + BLACK_KEY_WIDTH;
  for (let i = 0; i < BLUCK_KEY_NUM; i++) {
    const keyName = `${BLACK_KEY_LEVEL[i]}3`;
    const blackKey = (
      <rect
        x={blackX}
        y={0}
        width={BLACK_KEY_WIDTH}
        height={BLACK_KEY_HEIGHT}
        className='black'
        key={keyName}
        onClick={() => {
          props.judgment(keyName);
        }}
      />
    );
    blackKeys.push(blackKey);
    blackX = blackX + BLACK_KEY_WIDTH + BLACK_KEY_SPASE[i];
  }

  const svgWidth = whiteX + 2;
  const svgHeight = WHITE_KEY_HEIGHT + 2;
  return (
    <div className='Keyboard'>
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`-1 -1 ${svgWidth} ${svgHeight}`}
      >
        {whiteKeys}
        {blackKeys}
      </svg>
    </div>
  );
}

export function FreeKeyboard() {
  let whiteKeys = [];
  let whiteX = 0;
  for (let i = 0; i < OCTAVE_NUM; i++) {
    let octave = i;
    for (let i = 0; i < WHITE_KEY_NUM; i++) {
      const keyName = `${WHITE_KEY_LEVEL[i]}${octave}`;
      const src = `../src/audio/${keyName}.mp3`;
      const audio = new Audio(src);
      const whiteKey = (
        <rect
          x={whiteX}
          y={0}
          width={WHITE_KEY_WIDTH}
          height={WHITE_KEY_HEIGHT}
          className='white'
          onMouseDown={() => {
            playPiano(audio);
          }}
          key={keyName}
        />
      );
      whiteKeys.push(whiteKey);
      whiteX = whiteX + 80;
    }
  }
  {
    const src = `../src/audio/c7.mp3`;
    const audio = new Audio(src);
    whiteKeys.push(
      <rect
        x={whiteX}
        y={0}
        width={WHITE_KEY_WIDTH}
        height={WHITE_KEY_HEIGHT}
        className='white'
        onMouseDown={() => {
          playPiano(audio);
        }}
        key='c7'
      />
    );
    whiteX = whiteX + 80;
  }

  let blackKeys = [];
  let blackX = 0;
  for (let i = 0; i < OCTAVE_NUM; i++) {
    let octave = i;
    blackX = blackX + BLACK_KEY_WIDTH;
    for (let i = 0; i < BLUCK_KEY_NUM; i++) {
      const keyName = `${BLACK_KEY_LEVEL[i]}${octave}`;
      const src = `../src/audio/${keyName}.mp3`;
      const audio = new Audio(src);
      const blackKey = (
        <rect
          x={blackX}
          y={0}
          width={BLACK_KEY_WIDTH}
          height={BLACK_KEY_HEIGHT}
          className='black'
          onMouseDown={() => {
            playPiano(audio);
          }}
          key={keyName}
        />
      );
      blackKeys.push(blackKey);
      blackX = blackX + BLACK_KEY_WIDTH + BLACK_KEY_SPASE[i];
    }
  }

  let keyTexts = [];
  let textX = 20;
  const TEXT_Y = 380;
  for (let i = 0; i <= OCTAVE_NUM; i++) {
    const keyText = (
      <text x={textX} y={TEXT_Y} className='text' key={`Ct${i}`}>
        C{i}
      </text>
    );
    keyTexts.push(keyText);
    textX = textX + 560;
  }

  const SVG_WIDTH = whiteX + 2;
  const SVG_HEIGHT = WHITE_KEY_HEIGHT + 2;

  return (
    <div className='Keyboard'>
      <svg
        width={SVG_WIDTH}
        height={SVG_HEIGHT}
        viewBox={`-1 -1 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      >
        {whiteKeys}
        {blackKeys}
        {keyTexts}
      </svg>
    </div>
  );
}

const playPiano = (audio) => {
  if (!audio.seeking || audio.currentTime !== 0) {
    audio.currentTime = 0;
  }
  audio.play();
};
