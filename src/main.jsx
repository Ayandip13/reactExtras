import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./context/Cart.jsx";

// Rendering the application with CartProvider for managing cart context
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrapping App with CartProvider to provide cart context */}
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
