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

function AppRouter() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default AppRouter;
