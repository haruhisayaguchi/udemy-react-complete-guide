import { useState } from "react"

export default function Player({ name, symbol, isActive, onSave }) {
	const [playerName, setPlayerName] = useState(name)
	const [isEditing, setIsEditing] = useState(false)

	function handleClick() {
		setIsEditing((prevState) => !prevState)
		if (isEditing) {
			onSave(symbol, playerName)
		}
	}

	function handleChange(event) {
		setPlayerName(event.target.value)
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{isEditing ?
					<input type="text" value={playerName} onChange={handleChange} required></input> :
					<span className="player-name">{playerName}</span>}
				<span className="player-symbol">{symbol}</span>
				<button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
			</span>
		</li>
	)
}