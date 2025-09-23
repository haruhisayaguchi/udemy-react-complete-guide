import logoImage from '../assets/logo.jpg'

export default function Header({ count, handleCart }) {
	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logoImage} alt="logo" />
				<h1>REACTFOOD</h1>
			</div>
			<button className='text-button' onClick={handleCart}>Cart({count})</button>
		</header>
	)
}