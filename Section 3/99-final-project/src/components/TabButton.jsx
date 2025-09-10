export default function TabButton({ label, onSelect, isSelected = false }) {
	return (
		<li>
			<button className={isSelected ? "active" : undefined} onClick={onSelect}>{label}</button>
		</li>
	)
}