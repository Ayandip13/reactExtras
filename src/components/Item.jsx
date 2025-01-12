import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/Cart";

function Item(props) {
  // Accessing the cart context
  const cart = useContext(cartContext);

  console.log(cart); // Debugging the cart context

  return (
    <div className="text-center justify-center">
      {/* Displaying item name and price */}
      <div>Name : {props.name}</div>
      <h4>Price : {props.price}</h4>

      {/* Button to add item to the cart */}
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
        className="bg-slate-500 rounded-md"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Item;
