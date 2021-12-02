import React from "react";
import GamePlay from "../../models/GamePlay";
import Square from "../square/Square";
import BoardProps from "./BoardProps";
import "./BoardStyle.scss";

function Board(props: BoardProps & React.HTMLAttributes<HTMLDivElement>) {
  const [state, setState] = React.useState<GamePlay>({
    squares: Array(9).fill(null),
    xIsTheNextPlayer: true,
  });

  const status = state.xIsTheNextPlayer ? "X" : "O";

  function calculateWinner(squares: Array<'X' | 'O' | null>): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i: number) {
    const squares = state.squares.slice();
    squares[i] = state.xIsTheNextPlayer ? "X" : "O";
    setState({
      squares: squares,
      xIsTheNextPlayer: !state.xIsTheNextPlayer,
    });
  }

  const renderSquare = (i: number) => {
    return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(state.squares);
  let statusText = <>Next player: <span>{status}</span></>;
  if(winner)
    statusText = <>The winner is: <span>{winner}</span><br/>👊👏🔥</>;

  return (
    <div className="board">
      <div className="board-status">
        {statusText}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
