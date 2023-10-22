import React from "react";
import Square from "./Square";

const Gameboard = ({ board, onClick }) => {
  return (
    <div className="gameboard ">
      {board.map((value, idx) => {
        return (
          <Square
            value={value}
            onClick={() => value === null && onClick(idx)}
          />
        );
      })}
    </div>
  );
};

export default Gameboard;
