import React from "react";
import SquareProps from "./SquareProps";
import "./SquareStyle.scss";

function Square(props: SquareProps & React.HTMLAttributes<HTMLDivElement>) {
  const [state, setState] = React.useState<SquareProps>(props);
  
  function squareClicked() {
    setState({ value: 'X' });
  }
  return (
    <button className="square" onClick={squareClicked}>{state.value}</button>
  );
}

export default Square;
