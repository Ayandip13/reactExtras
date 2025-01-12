import React, { createContext, useState } from "react";

// Creating a context for the cart
export const cartContext = createContext(null);

// Provider component to manage the cart state
export const CartProvider = (props) => {
  // State to store cart items
  const [items, setItems] = useState([]);

  return (
    // Providing the cart context to the children components
    <cartContext.Provider value={{ items, setItems }}>
      {props.children}
    </cartContext.Provider>
  );
};
