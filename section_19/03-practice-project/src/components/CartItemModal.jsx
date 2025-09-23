import { useRef, useImperativeHandle } from "react"

export default function CartItemModal({
	ref,
	cartItem,
	handleIncrementCart,
	handleDecrementCart,
	handleCancel,
	handleCheckout
}) {
	const dialogRef = useRef();

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
			<div className='cart' >
				<h2>Your Cart</h2>
				<ul>
					{cartItem?.map((item) => (
						<li key={item.id}>
							<div className="cart-item">
								<p>{item.name}</p>
								<section className="cart-item-actions">
									<button onClick={() => handleDecrementCart(item.id)}>-</button>
									<p>{item.count}</p>
									<button onClick={() => handleIncrementCart(item.id)}>+</button>
								</section>
							</div>
						</li>
					))}
				</ul>
				<p className="cart-total">${cartItem?.reduce((acc, curr) => acc + curr.price * curr.count, 0)}</p>
				<div className="modal-actions">
					<button className="text-button" onClick={handleCancel}>Close</button>
					<button className="button" onClick={handleCheckout}>Go to Checkout</button>
				</div>
			</div>
		</dialog>
	)
}