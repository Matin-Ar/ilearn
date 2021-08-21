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
import Notification from "../Components/Notification/Notification";
import LoginPage from "../Pages/LoginPage";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Register" component={RegisterPage} />
        <Route path="/Login" component={LoginPage} />
      </Switch>
      <Notification />
    </Router>
  );
}

export default AppRouter;
