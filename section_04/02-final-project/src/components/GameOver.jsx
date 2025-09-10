export default function GameBoard({ winner, onRematch }) {
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			{winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
			<p>
				<button onClick={onRematch}>Rematch!</button>
			</p>
		</div>
	)
}