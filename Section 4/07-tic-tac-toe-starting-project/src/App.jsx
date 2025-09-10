import GameBoard from "./components/GameBoard"
import GameOver from "./components/GameOver"
import Log from "./components/Log";
import Player from "./components/Player"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./constants/winning-combination";

const PLAYERS = { "X": "Player 1", "O": "Player 2" }

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].col];
    const secondSquare = gameBoard[combination[1].row][combination[1].col];
    const thirdSquare = gameBoard[combination[2].row][combination[2].col];
    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = players[firstSquare];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState({ "X": PLAYERS.X, "O": PLAYERS.O });
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      const newTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer
        },
        ...prevTurns
      ];
      return newTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [playerSymbol]: newName
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onSave={handlePlayerNameChange} />
          <Player name={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onSave={handlePlayerNameChange} />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayer={activePlayer}
          gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
