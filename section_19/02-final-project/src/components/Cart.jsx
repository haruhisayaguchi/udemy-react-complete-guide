import { useContext } from 'react'
import Modal from './UI/Modal'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'
import { currencyFormatter } from '../util/formatting'
import CartItem from './CartItem'

export default function Cart() {
	const cartContext = useContext(CartContext);
	const userProgressContext = useContext(UserProgressContext);

	const cartTotal = cartContext.items.reduce((total, item) => total + item.quantity * item.price, 0)

	function handleCloseCart() {
		userProgressContext.hideCart();
	}

	function handleGoToCheckout() {
		userProgressContext.showCheckout();
	}

	return (
		<Modal
			className='cart'
			open={userProgressContext.progress === 'cart'}
			onClose={userProgressContext.progress === 'cart' ? handleCloseCart : undefined}
		>
			<h2>Your Cart</h2>
			<ul>
				{cartContext.items.map(item =>
					<CartItem
						key={item.id}
						name={item.name}
						quantity={item.quantity}
						price={item.price}
						onIncrease={() => cartContext.addItem(item)}
						onDecrease={() => cartContext.removeItem(item.id)}
					/>
				)}
			</ul>
			<p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
			<p className='modal-actions'>
				<Button textOnly onClick={handleCloseCart}>Close</Button>
				{cartContext.items.length > 0 &&
					<Button onClick={handleGoToCheckout}>Go to Checkout</Button>
				}
			</p>
		</Modal>
	)
}