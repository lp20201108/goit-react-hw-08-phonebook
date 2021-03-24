import React, { Component, Suspense, lazy } from "react";
import AppBar from "./AppBar";
import { Switch } from "react-router-dom";
import HomeView from "../views/HomeView";
import RegisterView from "../views/RegisterView";
import LoginView from "../views/LoginView";
import ContactsView from "../views/ContactsView";
import { connect } from "react-redux";
import { getCurrentUser } from "../redux/auth/auth-operations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// const HomeView = lazy(() => import("../views/HomeView"));
// const ContactsView = lazy(() => import("../views/ContactsView"));
// const RegisterView = lazy(() => import("../views/RegisterView"));
// const LoginView = lazy(() => import("../views/LoginView"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}></Suspense>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            component={RegisterView}
            restricted
            redirectTo="/contacts"
          />
          <PublicRoute
            path="/login"
            component={LoginView}
            restricted
            redirectTo="/contacts"
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
