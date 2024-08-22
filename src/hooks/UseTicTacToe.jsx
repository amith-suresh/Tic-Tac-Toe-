import { useState } from 'react';

const initialState = () => Array(9).fill(null);

function UseTicTacToe() {
  const [board, setBoard] = useState(initialState());
  const [isXNext, setIsXNext] = useState(true);
  
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (const [a, b, c] of WINNING_PATTERNS) {
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!!`;
    if (!board.includes(null)) return 'Draw';
    return `Player ${isXNext ? "X" : "O"}'s turn`;
  };

  const resetGame = () => {
    setBoard(initialState());
    setIsXNext(true);
  };

  return {
    board,
    handleClick,
    getStatusMessage,
    resetGame,
  };
}

export default UseTicTacToe;
