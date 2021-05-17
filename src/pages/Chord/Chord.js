import React from 'react';
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import './chord.css';

export function Chord() {
  return (
    <div>
      <h2>Chord</h2>
      <Keyboard />
    </div>
  );
}

function Keyboard() {
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('a3');

  return (
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(midiNumber) => {}}
      stopNote={(midiNumber) => {}}
      width={300}
    />
  );
}
