import React from 'react';
import UseTicTacToe from './hooks/UseTicTacToe';

function Tictactoe() {
  const { board, handleClick, getStatusMessage, resetGame } = UseTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button onClick={resetGame} className="reset-button">Reset Button</button>
      </div>
      <div className="board-row">
        {board.map((value, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
            disabled={value !== null}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tictactoe;
