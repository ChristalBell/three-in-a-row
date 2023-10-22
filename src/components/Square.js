import React from "react";

const Square = ({ value, onClick }) => {
  const mark = value === "X" ? "xBox" : "oBox";

  return (
    <div>
      <button className={mark} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;
