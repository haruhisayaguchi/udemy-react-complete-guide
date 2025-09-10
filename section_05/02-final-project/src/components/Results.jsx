import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({ userInput }) {
	const resultData = calculateInvestmentResults(userInput);
	const initialInvestment = userInput.initialInvestment;

	return (
		<table id='result'>
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{resultData.map((data) => {
					const totalInterest = data.valueEndOfYear - initialInvestment - (data.annualInvestment * data.year);
					const investedCapital = data.valueEndOfYear - totalInterest;
					return (
						<tr key={data.year}>
							<td>{data.year}</td>
							<td>{formatter.format(data.valueEndOfYear)}</td>
							<td>{formatter.format(data.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(investedCapital)}</td>
						</tr>
					)
				}
				)}
			</tbody>
		</table>
	)
}