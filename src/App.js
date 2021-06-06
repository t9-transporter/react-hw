import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Route from "./components/route";
import CheckCounterPage from "../src/containers/CheckCounterContainer";
import RegisterPage from "../src/containers/RegisterContainer";
import pageThree from "../src/components/pages/pageThree";
import pageFour from "../src/components/pages/pageFour";
import pageFive from "../src/components/pages/pageFive";
import pageSix from "../src/components/pages/pageSix";
import pageSeven from "../src/components/pages/pageSeven";

import { root, checkCounter, three, four, five, six, seven } from "./AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={checkCounter} component={CheckCounterPage} />
          <Route path={three} component={pageThree} />
          <Route path={four} component={pageFour} />
          <Route path={five} component={pageFive} />
          <Route path={six} component={pageSix} />
          <Route path={seven} component={pageSeven} />

          <Route path={root} component={RegisterPage} />

          <Redirect to={root} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
