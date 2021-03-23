import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/operations";
import { getContacts } from "../../redux/contacts-selectors";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name, this.state.number);

    const oldContactName = this.props.contacts.find(
      (contact) => contact.name === this.state.name
    );

    const oldContactNumber = this.props.contacts.find(
      (contact) => contact.number === this.state.number
    );

    if (oldContactName) {
      alert(
        `This contact NAME already exists
         as Name:${oldContactName.name} Tel:${oldContactName.number}`
      );
      return;
    } else if (oldContactNumber) {
      alert(
        `This contact NUMBER already exists as
         Tel:${oldContactNumber.number} Name:${oldContactNumber.name}`
      );
      return;
    } else if (!this.state.name) {
      alert("Please, enter the contact name");
      return;
    } else if (!this.state.number) {
      alert("Please, enter the contact number");
      return;
    }

    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.contactForm}>
        <label htmlFor="name" className={styles.label}>
          Name
          <input
            name="name"
            type="text"
            className={styles.contactInput}
            placeholder="insert name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <label htmlFor="number" className={styles.label}>
          Number
          <input
            name="number"
            type="text"
            className={styles.contactInput}
            placeholder="insert number"
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: addContact,
};

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
