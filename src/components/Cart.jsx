import React, { useContext } from "react";
import { cartContext } from "../context/Cart";

function Cart() {
  // Accessing the cart context
  const cart = useContext(cartContext);

  // Calculating the total price of items in the cart
  const total = cart.items.reduce((a, b) => a + b.price, 0);

  return (
    <div>
      <h1>Cart</h1>

      {/* Displaying the list of items in the cart */}
      {cart.items.map((e, index) => (
        <li key={index}>
          {e.name} - {e.price}
        </li>
      ))}

      {/* Displaying the total price */}
      <h5>Total : {total}</h5>
    </div>
  );
}

export default Cart;
