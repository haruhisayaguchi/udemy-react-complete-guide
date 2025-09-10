export default function TabButton({ title, handleClick, isSelected }) {
	return (
		<li>
			<button className={isSelected ? "active" : undefined} onClick={handleClick}>{title}</button>
		</li>
	)
}