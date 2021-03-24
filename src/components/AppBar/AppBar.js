import React from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(255,210,81)",
    boxShadow:
      "box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(254,63,71,0.2)",
  },
};

const AppBar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
