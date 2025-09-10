import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ userInput }) {
	const result = calculateInvestmentResults(userInput)
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
				{result.map(({ year, interest, valueEndOfYear, totalInterst, totalInvestment}) => {
					return (
						<tr key={year}>
							<td>{year}</td>
							<td>{formatter.format(valueEndOfYear)}</td>
							<td>{formatter.format(interest)}</td>
							<td>{formatter.format(totalInterst)}</td>
							<td>{formatter.format(totalInvestment)}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}