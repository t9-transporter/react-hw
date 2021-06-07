import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <Link className="top green" to="/pageFive">
        Go to Page#5
      </Link>
    </div>
  );
};

export default PageFour;
