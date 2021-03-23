import { uuid } from "uuidv4";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactsList.module.css";
import { removeContact } from "../../redux/operations";

const ContactsList = ({ contacts, handleRemove }) => {
  // if (!contacts.length) {
  //   return <p className={styles.message}>Phonebook is empty!</p>;
  // }
  return (
    <ul className="contactsList">
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
};

const mapDispatchToProps = {
  handleRemove: removeContact,
};

export default connect(null, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
