import React from 'react';
import './Keyboad.css';

/* メモ
白鍵：80*405, 7こ 
黒鍵：50*225, 5こ, (40,100,35,35,50)
*/

const OCTAVE_NUM = 7;
const WHITE_KEY_NUM = 7;
const BLUCK_KEY_NUM = 5;

const WHITE_KEY_WIDTH = 80;
const WHITE_KEY_HEIGHT = 405;
const WHITE_KEY_LEVEL = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

const BLACK_KEY_WIDTH = 50;
const BLACK_KEY_HEIGHT = 225;
const BLACK_KEY_SPASE = [40, 100, 35, 35, 50];
const BLACK_KEY_LEVEL = ['cs', 'ds', 'fs', 'gs', 'as'];

export function Keyboad() {
  let whiteKeys = [];
  let whiteX = 0;
  for (let i = 0; i < WHITE_KEY_NUM; i++) {
    const whiteKey = (
      <rect
        x={whiteX}
        y={0}
        width={WHITE_KEY_WIDTH}
        height={WHITE_KEY_HEIGHT}
        className="white"
        id={`${WHITE_KEY_LEVEL[i]}3`}
      />
    );
    whiteKeys.push(whiteKey);
    whiteX = whiteX + 80;
  }

  let blackKeys = [];
  let blackX = 0;
  blackX = blackX + BLACK_KEY_WIDTH;
  for (let i = 0; i < BLUCK_KEY_NUM; i++) {
    const blackKey = (
      <rect
        x={blackX}
        y={0}
        width={BLACK_KEY_WIDTH}
        height={BLACK_KEY_HEIGHT}
        className="black"
        id={`${BLACK_KEY_LEVEL[i]}3`}
      />
    );
    blackKeys.push(blackKey);
    blackX = blackX + BLACK_KEY_WIDTH + BLACK_KEY_SPASE[i];
  }

  const svgWidth = whiteX + 2;
  const svgHeight = WHITE_KEY_HEIGHT + 2;
  return (
    <div className="keyboad">
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

export function FreeKeyboad() {
  let whiteKeys = [];
  let whiteX = 0;
  for (let i = 0; i < OCTAVE_NUM; i++) {
    let octave = i;
    for (let i = 0; i < WHITE_KEY_NUM; i++) {
      const src = `./src/audio/${WHITE_KEY_LEVEL[i]}${octave}.mp3`;
      const audio = new Audio(src);
      const whiteKey = (
        <rect
          x={whiteX}
          y={0}
          width={WHITE_KEY_WIDTH}
          height={WHITE_KEY_HEIGHT}
          className="white"
          onMouseDown={() => {
            PlayPiano(audio);
          }}
        />
      );
      whiteKeys.push(whiteKey);
      whiteX = whiteX + 80;
    }
  }
  const src = `./src/audio/c7.mp3`;
  const audio = new Audio(src);
  whiteKeys.push(
    <rect
      x={whiteX}
      y={0}
      width={WHITE_KEY_WIDTH}
      height={WHITE_KEY_HEIGHT}
      className="white"
      onMouseDown={() => {
        PlayPiano(audio);
      }}
    />
  );
  whiteX = whiteX + 80;

  let blackKeys = [];
  let blackX = 0;
  for (let i = 0; i < OCTAVE_NUM; i++) {
    let octave = i;
    blackX = blackX + BLACK_KEY_WIDTH;
    for (let i = 0; i < BLUCK_KEY_NUM; i++) {
      const src = `./src/audio/${BLACK_KEY_LEVEL[i]}${octave}.mp3`;
      const audio = new Audio(src);
      const blackKey = (
        <rect
          x={blackX}
          y={0}
          width={BLACK_KEY_WIDTH}
          height={BLACK_KEY_HEIGHT}
          className="black"
          onMouseDown={() => {
            PlayPiano(audio);
          }}
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
      <text x={textX} y={TEXT_Y} className="text">
        C{i}
      </text>
    );
    keyTexts.push(keyText);
    textX = textX + 560;
  }

  const SVG_WIDTH = whiteX + 2;
  const SVG_HEIGHT = WHITE_KEY_HEIGHT + 2;

  return (
    <div className="keyboad">
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

const PlayPiano = (audio) => {
  if (!audio.seeking || audio.currentTime !== 0) {
    audio.currentTime = 0;
  }
  audio.play();
};
