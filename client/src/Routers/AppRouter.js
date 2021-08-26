import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import { connect } from "react-redux";

//imported pages and components
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import Notification from "../Components/Notification/Notification";
import LoginPage from "../Pages/LoginPage";

import setAutherizationToken from "../Utils/setAutherizationToken";
import { startSetCurrentUser } from "../Actions/UserActions";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import DashboardPage from "../Pages/DashboardPage";

function AppRouter(props) {
  //check local storage to see if token exists
  if (localStorage.jwtToken) {
    setAutherizationToken(localStorage.jwtToken);
    props.dispatch(startSetCurrentUser());
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <PublicRoute
          path="/Register"
          component={RegisterPage}
          isAuth={props.isAuth}
        />
        <PublicRoute
          path="/Login"
          component={LoginPage}
          isAuth={props.isAuth}
        />
        <PrivateRoute
          path="/Dashboard"
          component={DashboardPage}
          isAuth={props.isAuth}
        />
      </Switch>
      <Notification />
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.Users.isSignedIn,
});

export default connect(mapStateToProps)(AppRouter);
