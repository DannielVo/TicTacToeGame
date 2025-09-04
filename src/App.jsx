import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  // Suy ra người chơi hiện tại từ danh sách lượt đi
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns); // activePlayer để hiển thị UI hightlight ngchoi đg tới lượt

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      // let currentPlayer = "X";

      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }

      let currentPlayer = deriveActivePlayer(prevTurns);

      // Mảng lưu vị trí row/col selected trong gameBoard và currentPlayer(symbolPlayer)
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },

        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>

          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>

        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        ></GameBoard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  );
}

export default App;
