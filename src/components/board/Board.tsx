import React from 'react';
import GamePlay from '../../models/GamePlay';
import Square from '../square/Square';
import BoardProps from './BoardProps';
import './BoardStyle.scss'

function Board(props: BoardProps & React.HTMLAttributes<HTMLDivElement>) {
  
  const status = 'Next player: X';
  const [state, setState] = React.useState<GamePlay>({squares: Array(9).fill(null)});

  const renderSquare = (i: number)=> {
    return <Square value={state.squares[i]}/>;
  }

  return (
      <div>
        <div className="status">{status}</div>
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