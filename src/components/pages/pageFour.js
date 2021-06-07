import React, { useState } from "react";
import "../../slyles/pages.css";

const PageFour = () => {
  let [counter, setCounter] = useState(0);

  let increment = () => setCounter(counter + 1);
  let decrement = () => setCounter(counter - 1);

  return (
    <div>
      <div>
        <h3>Counter: {counter}</h3>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Remove</button>
      </div>
    </div>
  );
};

export default PageFour;
