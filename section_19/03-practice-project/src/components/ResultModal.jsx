import { useRef, useImperativeHandle } from "react"

export default function ResultModal({ ref }) {
	const dialogRef = useRef();

	useImperativeHandle(ref, () => ({
		open: () => {
			dialogRef.current.showModal();
		}
	}), [])

	return (
		<dialog className="modal" ref={dialogRef}>
			<h2>Success!</h2>
		</dialog>
	)
}