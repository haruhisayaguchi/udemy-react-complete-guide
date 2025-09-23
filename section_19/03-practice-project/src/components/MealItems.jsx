import { useState, useEffect } from "react";
import { fetchMeals } from "../http";

export default function MealItems({ handleAddToCart }) {
	const [meals, setMeals] = useState([])
	useEffect(() => {
		async function fetchMealItems() {
			const data = await fetchMeals();
			setMeals(data);
		}
		fetchMealItems();
	}, [])

	return (
		<ul id="meals">
			{meals.length > 0 && meals.map((meal) => (
				<li key={meal.id}>
					<div className='meal-item'>
						<img src={`http://localhost:3000/${meal.image}`} alt="logo" />
						<h3>{meal.name}</h3>
						<p className='meal-item-price'>${meal.price}</p>
						<article className='meal-item-description'>
							{meal.description}
						</article>
						<button
							className='button meal-item-actions'
							onClick={() => handleAddToCart(meal)}
						>
							Add to Cart
						</button>
					</div>
				</li>
			))}
		</ul>
	)
}