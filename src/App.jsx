import { useState } from "react";
import './index.css'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div className="bg-black">
          <h2 className="text-lg text-red-500 text-center">I'm Batman</h2>
        </div>
          
    </>
  );
}

export default App;
