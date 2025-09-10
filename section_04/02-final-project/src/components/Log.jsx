export default function Log({ turns }) {
	return <ol id="log">
		{turns.map((turn, index) =>
			<li key={index}>
				{`${turn.player} selected row ${turn.square.row + 1}, col ${turn.square.col + 1}`}
			</li>
		)}
	</ol>
}