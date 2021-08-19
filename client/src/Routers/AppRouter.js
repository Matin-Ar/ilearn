import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

//imported pages and components
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
