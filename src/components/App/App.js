import React, { useState } from "react";
import {
  Board,
  Button,
  Cell,
  Global,
  Header,
  Main,
  ScoreBoard,
} from "./styles";

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

const App = () => {
  const [score, setScore] = useState({ X: 0, O: 0, CATS: 0 });
  const [boardArray, setBoardArray] = useState(getBoardArray(9));
  const [X, setX] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [winArray, setWinArray] = useState([]);

  function restartGame() {
    setX(true);
    setBoardArray(getBoardArray(9));
    setGameOver(false);
    setWinner("");
    setWinArray([]);
  }

  const currentPlayer = X ? "X" : "O";

  function getLineValues(line) {
    const lineValues = [];
    line.forEach((item) => lineValues.push(boardArray[item]));
    return lineValues;
  }

  function getBoardArray(num) {
    const array = [];
    for (let i = 0; i < num; i++) {
      array.push("");
    }
    return array;
  }

  function checkFullBoard() {
    const isFull = !boardArray.includes("");
    return isFull;
  }

  function isWinningLine(line) {
    const checkLine = getLineValues(line);
    const firstItem = checkLine[0];

    // A line can't be a winner if any of the cells are blank
    if (checkLine.includes("")) {
      return false;
    }

    if (checkLine.every((item) => item === firstItem)) {
      return true;
    } else {
      return false;
    }
  }

  function isCatsLine(line) {
    const lineValues = getLineValues(line);
    if (lineValues.includes("X") && lineValues.includes("O")) {
      return true;
    }

    return false;
  }

  function updateScore(winner) {
    const newScore = { ...score };
    newScore[winner]++;
    setScore(newScore);
  }

  function handleWinner(winArray) {
    setGameOver(true);
    setWinner(currentPlayer);
    setWinArray(winArray);
    updateScore(currentPlayer);
  }

  function handleCatsGame() {
    setGameOver(true);
    updateScore("CATS");
  }

  function handleClick(index) {
    boardArray[index] = currentPlayer;
    const winningLine = lines.find((line) => isWinningLine(line));

    const isWinner = !!winningLine;
    const isCatsGame = lines.every((line) => isCatsLine(line));

    if (isWinner) {
      handleWinner(winningLine);
      return;
    } else if (isCatsGame) {
      handleCatsGame();
      return;
    }

    if (checkFullBoard()) {
      setGameOver(true);
      return;
    }

    setX(!X);
  }

  return (
    <>
      <Global />
      <Main>
        <Header>
          <h1>
            {!gameOver && "Tic Tac Toe"}
            {winner !== "" && `${winner} WON!`}
            {winner === "" && gameOver && "CAT'S GAME!"}
          </h1>
          {!gameOver && <p>It's your turn {currentPlayer}!</p>}
          {winner !== "" &&
            `That's ${score[winner]} win${
              score[winner] > 1 ? "s" : ""
            } for ${winner}!`}
          {winner === "" &&
            gameOver &&
            `That's ${score.CATS} game${
              score.CATS > 1 ? "s" : ""
            } to the cats!`}
        </Header>
        <Board>
          {boardArray.map((cell, index) => (
            <Cell
              key={index}
              onClick={() => handleClick(index)}
              disabled={cell !== "" || gameOver}
              winner={winArray.includes(index)}
            >
              {cell}
            </Cell>
          ))}
        </Board>
        <Button onClick={restartGame}>Start Over</Button>
        <ScoreBoard>
          <thead>
            <tr>
              <th>X's Wins: </th>
              <th>O's Wins: </th>
              <th>Cat's Games: </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{score.X}</td>
              <td>{score.O}</td>
              <td>{score.CATS}</td>
            </tr>
          </tbody>
        </ScoreBoard>
      </Main>
    </>
  );
};

export default App;
