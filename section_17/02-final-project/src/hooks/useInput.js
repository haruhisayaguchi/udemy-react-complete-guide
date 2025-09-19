import { useState } from "react"

export function useInput(defaultValue, validationFn) {
	const [enteredValue, setEnteredValue] = useState(defaultValue)
	const [isEdited, setIsEdited] = useState(false)

	const isValid = validationFn(enteredValue);

	function handleChange(event) {
		setEnteredValue(event.target.value)
		setIsEdited(false)
	}

	function handleBlur() {
		setIsEdited(true)
	}

	return {
		value: enteredValue,
		handleChange,
		handleBlur,
		hasError: isEdited && !isValid
	}
}