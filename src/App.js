import React, { useState } from "react";
import "./App.scss";
import Gameboard from "./components/Gameboard";
import Resets from "./components/Resets";
import Scoreboard from "./components/Scoreboard";
import Square from "./components/Square";

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
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameover, setGameover] = useState(false);

  const handleClick = (squareIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === squareIdx) {
        return player1 === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updateBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      } else {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      }
    }

    setBoard(updateBoard);
    setPlayer1(!player1);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WINNINGS.length; i++) {
      const [x, y, z] = WINNINGS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameover(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameover(false);
    setBoard(Array(9).fill(null));
  };

  const resetScore = () => {
    setGameover(false);
    setScore(0);
  };

  return (
    <div className="App">
      <h1 className="flex"> Three In A Row </h1>
      <Scoreboard score={score} player1={player1} />
      <Gameboard board={board} onClick={gameover ? resetBoard : handleClick} />
      <Resets resetScore={resetScore} resetBoard={resetBoard} />
    </div>
  );
}

export default App;
