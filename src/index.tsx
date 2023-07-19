import React from 'react';
import ReactDOM from 'react-dom/client';
import GameBoard from './Components/GameBoard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <GameBoard />
);