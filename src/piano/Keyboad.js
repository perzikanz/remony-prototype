import React from 'react';
import './Keyboad.css';

/* メモ
白鍵：80*405, 7こ 
黒鍵：50*225, 5こ, (40,100,35,35,50)
*/

export function Keyboad() {
  let whiteKeys = [];
  let whiteX = 0;
  const whiteWidth = 80;
  const whiteHeight = 405;
  for (let i = 0; i < 7; i++) {
    const whiteKey = (
      <rect
        x={whiteX}
        y={0}
        width={whiteWidth}
        height={whiteHeight}
        className="white"
      />
    );
    whiteKeys.push(whiteKey);
    whiteX = whiteX + 80;
  }

  let blackKeys = [];
  let blackX = 0;
  const blackWidth = 50;
  const blackHeight = 225;
  const spase = [40, 100, 35, 35, 50];
  blackX = blackX + 50;
  for (let i = 0; i < 5; i++) {
    const blackKey = (
      <rect
        x={blackX}
        y={0}
        width={blackWidth}
        height={blackHeight}
        className="black"
      />
    );
    blackKeys.push(blackKey);
    blackX = blackX + 50 + spase[i];
  }

  const svgWidth = whiteX + 2;
  const svgHeight = whiteHeight + 2;
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
  const whiteWidth = 80;
  const whiteHeight = 405;
  const whiteKeyLevel = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  for (let i = 0; i < 7; i++) {
    let octave = i;
    for (let i = 0; i < 7; i++) {
      const src = `./src/audio/${whiteKeyLevel[i]}${octave}.mp3`;
      const audio = new Audio(src);
      const whiteKey = (
        <rect
          x={whiteX}
          y={0}
          width={whiteWidth}
          height={whiteHeight}
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
      width={whiteWidth}
      height={whiteHeight}
      className="white"
      onMouseDown={() => {
        PlayPiano(audio);
      }}
    />
  );
  whiteX = whiteX + 80;

  let blackKeys = [];
  let blackX = 0;
  const blackWidth = 50;
  const blackHeight = 225;
  const spase = [40, 100, 35, 35, 50];
  const blackKeyLevel = ['c', 'd', 'f', 'g', 'a'];
  for (let i = 0; i < 7; i++) {
    let octave = i;
    blackX = blackX + 50;
    for (let i = 0; i < 5; i++) {
      const src = `./src/audio/${blackKeyLevel[i]}s${octave}.mp3`;
      const audio = new Audio(src);
      const blackKey = (
        <rect
          x={blackX}
          y={0}
          width={blackWidth}
          height={blackHeight}
          className="black"
          onMouseDown={() => {
            PlayPiano(audio);
          }}
        />
      );
      blackKeys.push(blackKey);
      blackX = blackX + 50 + spase[i];
    }
  }

  let keyTexts = [];
  let textX = 20;
  const textY = 380;
  for (let i = 0; i < 7; i++) {
    const keyText = (
      <text x={textX} y={textY} className="text">
        C{i}
      </text>
    );
    keyTexts.push(keyText);
    textX = textX + 560;
  }
  keyTexts.push(
    <text x={textX} y={textY} className="text">
      C{7}
    </text>
  );

  const svgWidth = whiteX + 2;
  const svgHeight = whiteHeight + 2;

  return (
    <div className="keyboad">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`-1 -1 ${svgWidth} ${svgHeight}`}
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
