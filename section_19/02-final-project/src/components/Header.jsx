import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
	const cartContext = useContext(CartContext);
	const userProgressContext = useContext(UserProgressContext);

	const totalCartItems = cartContext.items.reduce((sum, item) => sum + item.quantity, 0);

	function handleShowCart() {
		userProgressContext.showCart();
	}

	return (
		<header id="main-header">
			<div id="title">
				<img src={logoImg} alt="A restaurant" />
				<h1>REACTFOOD</h1>
			</div>
			<nav>
				<Button textOnly={true} onClick={handleShowCart}>Cart ({totalCartItems})</Button>
			</nav>
		</header>
	)
}