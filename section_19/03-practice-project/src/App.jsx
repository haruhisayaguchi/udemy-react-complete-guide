import { useState, useRef } from "react";
import Header from "./components/Header";
import MealItems from "./components/MealItems";
import CartItemModal from "./components/CartItemModal";
import CheckoutModal from "./components/CheckoutModal";
import ResultModal from "./components/ResultModal";

function App() {
  const [cartItem, setCartItem] = useState([])
  const cartItemModalRef = useRef();
  const checkoutModalRef = useRef();
  const resultModalRef = useRef();

  function handleCartItemModal() {
    cartItemModalRef.current.open();
  }

  function handleCloseCartItem() {
    cartItemModalRef.current.close();
  }

  function handleCheckoutModal() {
    cartItemModalRef.current.close();
    checkoutModalRef.current.open();
  }

  function handleResultModal() {
    checkoutModalRef.current.close();
    resultModalRef.current.open();
    setCartItem([]);
  }

  function handleAddToCart(meal) {
    setCartItem((prevState) => {
      const index = prevState.findIndex((item) => item.id === meal.id);
      if (0 <= index) {
        return prevState.map((item, i) => (
          i === index ? { ...item, count: item.count + 1 } : item))
      }
      return [
        ...prevState, {
          id: meal.id,
          name: meal.name,
          price: +meal.price,
          count: 1
        }]
    })
  }

  function handleIncrementCart(id) {
    setCartItem((prevState) => {
      const index = prevState.findIndex((item) => item.id === id);
      if (0 <= index) {
        return prevState.map((item, i) => (
          i === index ? { ...item, count: item.count + 1 } : item))
      }
    })
  }

  function handleDecrementCart(id) {
    setCartItem((prevState) => {
      const index = prevState.findIndex((item) => item.id === id);
      if (0 <= index) {
        return prevState
          .map((item, i) => (i === index ? { ...item, count: item.count - 1 } : item))
          .filter((item) => item.count >= 1)
      }
    })
  }

  return (
    <>
      <CartItemModal
        ref={cartItemModalRef}
        cartItem={cartItem}
        handleIncrementCart={handleIncrementCart}
        handleDecrementCart={handleDecrementCart}
        handleCancel={handleCloseCartItem}
        handleCheckout={handleCheckoutModal}
      />
      <CheckoutModal
        ref={checkoutModalRef}
        cartItem={cartItem}
        handleResultModal={handleResultModal}
      />
      <ResultModal
        ref={resultModalRef}
      />
      <Header
        count={cartItem.length > 0 ? cartItem.reduce((acc, curr) => acc + curr.count, 0) : 0}
        handleCart={handleCartItemModal}
      />
      <MealItems handleAddToCart={handleAddToCart} />
    </>
  );
}

export default App;
