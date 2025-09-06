export default function GameOver({ winner, onSelectRematch }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
      <button onClick={onSelectRematch}>Rematch</button>
    </div>
  );
}
