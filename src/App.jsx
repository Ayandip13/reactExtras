// Importing necessary components and styles
import Cart from "./components/Cart";
import Item from "./components/Item";
import "./index.css";

// Main App component
function App() {
  return (
    <>
      {/* Adding items to the application */}
      <Item name="Macbook" price={100000} />
      <Item name="Mobile" price={10000} />
      <Item name="Pendrive" price={1000} />
      <Item name="Dell laptop" price={60000} />

      {/* Displaying the cart */}
      <Cart />
    </>
  );
}

export default App;
