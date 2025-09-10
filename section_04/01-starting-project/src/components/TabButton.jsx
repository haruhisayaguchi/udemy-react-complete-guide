export default function TabButton({ title, onClick, isSelected }) {
	return (
		<li>
			<button className={isSelected ? "active" : undefined} onClick={onClick}>{title}</button>
		</li>
	)
}