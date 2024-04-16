import { useState } from "react";
import { Link } from "react-router-dom";

function Square({ value, onSquareClick }) {
  const style = {
    backgroundColor: value === "X" ? "green" : value === "O" ? " red" : "",
    color: value === "X" ? "white" : value === "O" ? "white" : "",
  };
  return (
    <>
      <button className="square" onClick={onSquareClick} style={style}>
        {value}
      </button>
    </>
  );
}

function TicTacToe() {
  const [isX, setIsX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    let activeateClick = squares.slice();

    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    if (isX) {
      activeateClick[i] = "X";
    } else {
      activeateClick[i] = "O";
    }
    setSquares(activeateClick);
    setIsX(!isX);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isX ? "X" : "O");
  }

  return (
    <>
      <a className="resetGameTicTacToe" href="/tictactoe">
        Reset Game
      </a>
      <div className="theBorder">
        <h1>Tic tac toe</h1>
        <div className="showStatus">{status}</div>
        <div className="border-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="border-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="border-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < list.length; i++) {
    const [a, b, c] = list[i];

    if (squares[a] && squares[a] === squares[b] && squares[c] === squares[a])
      return squares[a];
  }
}
export default TicTacToe;
