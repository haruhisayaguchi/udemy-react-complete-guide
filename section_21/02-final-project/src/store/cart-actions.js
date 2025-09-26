import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export function fetchCartData() {
	return async dispatch => {
		const sendRequest = async () => {
			const response = await fetch(
				'https://fir-10bb2-default-rtdb.firebaseio.com/cart.json'
			);
			if (!response.ok) {
				throw new Error('Could not fetch card data!');
			}

			const data = await response.json();
			return data;
		}

		const cartData = await sendRequest().catch(e => {
			dispatch(uiActions.showNotification({
				status: 'error',
				title: 'Error!',
				message: 'Sending cart data failed!'
			}))
		})
		dispatch(cartActions.replaceCart(cartData));
	}
}

export function sendCartData(cart) {
	return async (dispatch) => {
		dispatch(uiActions.showNotification({
			status: 'pending',
			title: 'Sending...',
			message: 'Sending cart data!'
		}))

		const sendRequest = async () => {
			const response = await fetch(
				'https://fir-10bb2-default-rtdb.firebaseio.com/cart.json', {
				method: 'PUT',
				body: JSON.stringify({
					items: cart.items,
					totalQuantity: cart.totalQuantity
				}),
			})
			if (!response.ok) {
				throw new Error('Sending cart data failed.')
			}
		}

		await sendRequest().catch(e => {
			dispatch(uiActions.showNotification({
				status: 'error',
				title: 'Error!',
				message: 'Sending cart data failed!'
			}))
		})

		dispatch(uiActions.showNotification({
			status: 'success',
			title: 'Success!',
			message: 'Sent cart data successfully!'
		}))
	}
}