import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "../components/ContactForm";
import ContactsList from "../components/ContactsList";
import Filter from "../components/Filter/Filter";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "../components/App.module.css";
import { fecthContacts } from "../redux/contacts/contacts-operations";
import {
  getVisibleContacts,
  getLoading,
} from "../redux/contacts/contacts-selectors";
import Spinner from "../components/Spinner/Spinner";

class ContactsView extends Component {
  componentDidMount() {
    this.props.fecthContacts();
  }

  render() {
    const { contacts, loading } = this.props;
    return (
      <div className={styles.container}>
        <h1 className="titlePhonebook">Phonebook</h1>
        <ContactForm />
        <h2 className="title">Contacts list</h2>
        {!!contacts.length && <Filter />}
        <ContactsList contacts={this.props.contacts} />
        <Spinner loading={loading} />
        {/* {!contacts.length && (
            <p className={styles.message}>Phonebook is empty!</p>
          )} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: getVisibleContacts(state),
    loading: getLoading(state),
  };
};

const mapDispatchToProps = {
  fecthContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
