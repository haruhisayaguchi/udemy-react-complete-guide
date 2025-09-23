import { useRef, useActionState, useImperativeHandle } from "react"
import { updateOrders } from "../http";

export default function CheckoutModal({ ref, cartItem, handleResultModal }) {
	const dialogRef = useRef();

	function handleSubmitOrder(prevState, formData) {
		const sendRequest = async function (request) {
			try {
				await updateOrders(request);
				handleResultModal();
			} catch (error) {
				console.log(error);
			}
		}

		const name = formData.get('name');
		const email = formData.get('email');
		const street = formData.get('street');
		const postalCode = formData.get('postal-code')
		const city = formData.get('city')
		const request = {
			items: cartItem,
			customer: {
				name,
				email,
				street,
				'postal-code': postalCode,
				city
			}
		}
		sendRequest(request);
	}

	const [inputState, formAction] = useActionState(handleSubmitOrder, [
		{
			name: '',
			email: '',
			street: '',
			postalcode: '',
			city: ''
		}
	]);

	useImperativeHandle(ref, () => ({
		open: () => {
			dialogRef.current.showModal();
		},
		close: () => {
			dialogRef.current.close();
		}
	}), [])

	return (
		<dialog className='modal' ref={dialogRef}>
			<h2>Checkout</h2>
			<p>Total Amount $89.95</p>
			<form action={formAction}>
				<div className="control">
					<label htmlFor="text">Full Name</label>
					<input
						type="text"
						name="name"
					/>
				</div>
				<div className="control">
					<label htmlFor="text">E-Mail Address</label>
					<input
						type="text"
						name="email"
					/>
				</div>
				<div className="control">
					<label htmlFor="text">Street</label>
					<input
						type="text"
						name="street"
					/>
				</div>
				<div className="control">
					<div className="control-row">
						<label htmlFor="text">Postal Code</label>
						<input
							type="text"
							name="postal-code"
						/>
						<label htmlFor="text">City</label>
						<input
							type="text"
							name="city"
						/>
					</div>
				</div>
				<div className="modal-actions">
					<button className="text-button">Close</button>
					<button className="button">Submit Order</button>
				</div>
			</form>
		</dialog>
	)
}