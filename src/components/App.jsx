import React, { Component } from "react";
import AppBar from "./AppBar";
import { Switch, Route } from "react-router-dom";
import HomeView from "../views/HomeView";
import RegisterView from "../views/RegisterView";
import LoginView from "../views/LoginView";
import ContactsView from "../views/ContactsView";

export default class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </>
    );
  }
}
