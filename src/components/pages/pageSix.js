import React from "react";
import { Link } from "react-router-dom";
import "../../slyles/pages.css";

const pageSix = () => (
  <div>
    <Link className="top blue" to="/pageSeven">
      Go to Page#7
    </Link>
  </div>
);

export default pageSix;
