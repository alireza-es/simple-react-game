import React from "react";
import GamePlay from "../../models/GamePlay";
import Board from "../board/Board";
import './GameStyle.scss';

function Game() {
  const initState = {
    history: [{ squares: Array(9).fill(null) }],
    xIsTheNextPlayer: true,
    stepNumber: 0,
  };

  const [state, setState] = React.useState<GamePlay>(initState);

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

  const handleClick = (i: number): void => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsTheNextPlayer ? 'X' : 'O';
    setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsTheNextPlayer: !state.xIsTheNextPlayer,
      stepNumber: history.length,
    });
  };

  const jumpTo = (step: number)=> {
    setState({
      stepNumber: step,
      xIsTheNextPlayer: (step % 2) === 0,
      history: state.history,
    });
  }
  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);
  let statusText = <>Next player: <span>{state.xIsTheNextPlayer ? 'X' : 'O'}</span></>;
  if(winner)
    statusText = <>The winner is: <span>{winner}</span><br/>👊👏🔥</>;

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
      );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board height={100} squares={current.squares}
          onSquareClick={(i:number):void => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{statusText}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
