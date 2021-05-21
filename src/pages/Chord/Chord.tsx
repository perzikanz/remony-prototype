import React from 'react';
import { Dispatch } from 'redux';
import DivKeyboard from 'react-piano-keyboard';

import './chord.css';
import ConnectedPickScale from './pickScale';

type Props = {
  activeKeys: string[];
  scale: string;
  dispatch: Dispatch;
};

export const Chord: React.FC<Props> = (props) => {
  const { activeKeys = [''] } = props;
  return (
    <>
      <h2>Chord(コード演奏)</h2>
      <div className='keyboards'>
        <DivKeyboard
          keyboardLength={1}
          keyboardWidth={400}
          firstScale={3}
          activeKey={activeKeys}
        />
      </div>
      <ConnectedPickScale />
      {/* <PickChord scale={scale} setActiveKeys={setActiveKeys} /> */}
    </>
  );
};

// function PickChord() {
//   return (
//     <>
//       <ul>
//         <li>
//           <button></button>
//         </li>
//       </ul>
//     </>
//   );
// }
