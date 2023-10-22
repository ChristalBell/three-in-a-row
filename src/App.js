import React, { useState } from "react";
import "./App.scss";
import Gameboard from "./components/Gameboard";
import Resets from "./components/Resets";
import Scoreboard from "./components/Scoreboard";

function App() {
  const WINNINGS = [
    //across
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //down
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [player1, setPlayer1] = useState(true);

  const handleClick = (squareIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === squareIdx) {
        return player1 === true ? "X" : "O";
      } else {
        return value;
      }
    });
    checkWinner(updateBoard);
    setBoard(updateBoard);
    setPlayer1(!player1);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WINNINGS.length; i++) {
      const [x, y, z] = WINNINGS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        return board[x];
      }
    }
  };

  return (
    <div className="App">
      <h1 className="flex"> Three In A Row </h1>
      <Scoreboard />
      <Gameboard board={board} onClick={handleClick} />
      <Resets />
    </div>
  );
}

export default App;
