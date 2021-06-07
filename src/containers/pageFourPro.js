import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageFour from "../components/pages/pageFour";

let PageFourPro = () => {
  let [count, setCount] = useState([]);

  let Add = () => {
    setCount(count.concat([<PageFour key={Date.now()} />]));
    console.log(count);
  };

  let Remove = () => {
    setCount(count.length > 0 ? count.slice(0, -1) : (count = []));
  };

  return (
    <div>
      <Link className="top green" to="/pageFive">
        Go to Page#5
      </Link>
      <h3>
        {count.length > 0
          ? "Counters: " + count.length
          : "Add new counters, man!"}
      </h3>
      <button onClick={Add}>Add Counter</button>
      <button onClick={Remove}>Remove Counter</button>
      {count}
    </div>
  );
};

export default PageFourPro;
