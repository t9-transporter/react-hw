import React from "react";
import { Link } from "react-router-dom";
import "../../slyles/pages.css";

const pageFour = () => (
  <div>
    <Link className="top green" to="/pageFive">
      Go to Page#5
    </Link>
  </div>
);

export default pageFour;
