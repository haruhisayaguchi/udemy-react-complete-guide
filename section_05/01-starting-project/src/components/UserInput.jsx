export default function UserInput({userInput, onChange}) {

	function handleChange(inputId, newValue) {
		onChange(inputId, newValue)
	}

	return <section id="user-input">
		<div className="input-group">
			<p>
				<label>Initial Investment</label>
				<input
					type="number"
					name="initialInvestment"
					value={userInput.initialInvestment}
					onChange={(event) => handleChange(event.target.name, event.target.value)}
					required />
			</p>
			<p>
				<label>Annual Investment</label>
				<input
					type="number"
					name="annualInvestment"
					value={userInput.annualInvestment}
					onChange={(event) => handleChange(event.target.name, event.target.value)}
					required />
			</p>
		</div>
		<div className="input-group">
			<p>
				<label>Expected Return</label>
				<input
					type="number"
					name="expectedReturn"
					value={userInput.expectedReturn}
					onChange={(event) => handleChange(event.target.name, event.target.value)}
					required />
			</p>
			<p>
				<label>Duration</label>
				<input
					type="number"
					name="duration"
					value={userInput.duration}
					onChange={(event) => handleChange(event.target.name, event.target.value)}
					required />
			</p>
		</div>
	</section>
}