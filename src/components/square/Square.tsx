import React from "react";
import SquareProps from "./SquareProps";
import "./SquareStyle.scss";

function Square(props: SquareProps & React.HTMLAttributes<HTMLDivElement>) {
 
  function handleClicked() {
    props.onClick();
  }
  return (
    <button className="square" onClick={handleClicked}>{props.value}</button>
  );
}

export default Square;
