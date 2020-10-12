import React from 'react';
import './Keyboad.css';

/* メモ
白鍵：80*405, 7こ 
黒鍵：50*225, 5こ, (40,100,35,35,50)
*/

export default function Keyboad() {
  const keyboadLength = 6;

  let whiteKeys = [];
  let whiteX = 0;
  const whiteY = 0;
  const whiteWidth = 80;
  const whiteHeight = 405;
  for (let i = 0; i < keyboadLength * 7; i++) {
    const whiteKey = (
      <rect
        x={whiteX}
        y={whiteY}
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
  const blackY = 0;
  const blackWidth = 50;
  const blackHeight = 225;
  const spase = [40, 100, 35, 35, 50];
  for (let i = 0; i < keyboadLength; i++) {
    blackX = blackX + 50;
    for (let i = 0; i < 5; i++) {
      const blackKey = (
        <rect
          x={blackX}
          y={blackY}
          width={blackWidth}
          height={blackHeight}
          className="black"
        />
      );
      blackKeys.push(blackKey);
      blackX = blackX + 50 + spase[i];
    }
  }

  let keyTexts = [];
  let textX = 20;
  const textY = 380;
  for (let i = 0; i < keyboadLength; i++) {
    const keyText = (
      <text x={textX} y={textY} className="text">
        C{i}
      </text>
    );
    keyTexts.push(keyText);
    textX = textX + 560;
  }

  if (keyboadLength === 6) {
    whiteKeys.push(
      <>
        <rect
          x={whiteX}
          y={whiteY}
          width={whiteWidth}
          height={whiteHeight}
          className="white"
        />
        <text x={textX} y={textY} className="text">
          C{7}
        </text>
      </>
    );
    whiteX = whiteX + 80;
  }

  const svgWidth = whiteX;
  const svgHeight = whiteHeight;

  return (
    <div className="keyboad">
      <svg width={svgWidth} height={svgHeight}>
        {whiteKeys}
        {blackKeys}
        {keyTexts}
      </svg>
    </div>
  );
}
