import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../redux/auth/auth-operations";

const styles = {
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },

  container: {
    width: 320,
    margin: "0 auto",
    marginTop: 20,
  },

  title: {
    marginBottom: 15,
  },
  button: {
    margin: "0 auto",
    display: "flex",
    marginTop: 25,
  },
};

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogIn(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Log in page</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button style={styles.button} type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogIn: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
