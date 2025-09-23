export async function fetchMeals() {
	const response = await fetch('http://localhost:3000/meals')
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		throw new Error('Failed to fetch meals.')
	}
}

export async function updateOrders(order) {
	const response = await fetch(
		'http://localhost:3000/orders',
		{
			method: 'POST',
			body: JSON.stringify({ order }),
			headers: {
				'Content-type': 'application/json'
			}
		}
	)
	if (!response.ok) {
		throw new Error('Failed to update orders.');
	}
}