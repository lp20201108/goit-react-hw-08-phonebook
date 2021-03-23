import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/actions";
import { getFilter } from "../../redux/contacts-selectors";

const Filter = ({ filter, handleChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.inputFilter}
        name="filter"
        type="text"
        placeholder="search contact"
        onChange={handleChange}
        value={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
