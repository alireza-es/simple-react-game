import React from 'react';
import GamePlay from '../../models/GamePlay';
import Square from '../square/Square';
import BoardProps from './BoardProps';
import './BoardStyle.scss'

function Board(props: BoardProps & React.HTMLAttributes<HTMLDivElement>) {
  
  const [state, setState] = React.useState<GamePlay>({
    squares: Array(9).fill(null),
    xIsTheNextPlayer: true
  });

  const status = state.xIsTheNextPlayer ? 'X' : 'O';

  function handleClick(i: number) {
    const squares = state.squares.slice();
    squares[i] = state.xIsTheNextPlayer ? 'X': 'O';
    setState({
      squares: squares,
      xIsTheNextPlayer: !state.xIsTheNextPlayer
    });
  }

  const renderSquare = (i: number)=> {
    return <Square value={state.squares[i]} onClick={()=> handleClick(i)}/>;
  }

  return (
      <div className="board">
        <div className="board-status">Next player: <span>{status}</span></div>
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