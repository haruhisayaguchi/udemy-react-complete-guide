import { useContext, useActionState } from "react";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const url = 'http://localhost:3000/orders';
const config = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	}
}

export default function Checkout() {
	const cartContext = useContext(CartContext);
	const userProgressContext = useContext(UserProgressContext)
	const {
		data,
		error,
		sendRequest,
		clearData
	} = useHttp(url, config);

	const cartTotal = cartContext.items.reduce((total, item) => total + item.quantity * item.price, 0);

	function handleClose() {
		userProgressContext.hideCheckout();
	}

	function handleFinish() {
		userProgressContext.hideCheckout();
		cartContext.clearCart();
		clearData();
	}

	async function checkoutAction(prevState, formData) {
		const customerData = Object.fromEntries(formData.entries());

		await sendRequest(
			JSON.stringify({
				order: {
					items: cartContext.items,
					customer: customerData
				}
			})
		)
	}

	const [formState, formAction, pending] = useActionState(checkoutAction, null);

	if (data && !error) {
		return (
			<Modal open={userProgressContext.progress === 'checkout'} onClose={handleFinish}>
				<h2>Success!</h2>
				<p>Your order was submitted successfully.</p>
				<p className="modal-actions">
					<Button onClick={handleFinish}>Okey</Button>
				</p>
			</Modal>
		)
	}

	let actions = (
		<>
			<Button type="button" textOnly onClick={handleClose}>Close</Button>
			<Button>Submit Order</Button>
		</>
	)

	if (pending) {
		actions = <span>Sending order data...</span>
	}

	return (
		<Modal
			open={userProgressContext.progress === 'checkout'}
			onClose={handleClose}
		>
			<form action={formAction}>
				<h2>Checkout</h2>
				<p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
				<Input label="Full Name" id="name" type="text" />
				<Input label="E-Mail Address" id="email" type="email" />
				<Input label="Street" id="street" type="text" />
				<div className="control-row">
					<Input label="Postal Code" type="text" id="postal-code" />
					<Input label="City" type="text" id="city" />
				</div>

				{error && <Error title='Failed to submit order' message={error} />}

				<p className="modal-actions">
					{actions}
				</p>
			</form>
		</Modal>
	)
}