import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { CanvasProvider } from '../context/Canvas';

export function Game() {
  return (
    <CanvasProvider>
      jogo aqui
    </CanvasProvider>
  );
}
