import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  changeFilter,
  removeContact,
  fecthContactsRequest,
  fecthContactsSuccess,
  fecthContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  addContactRequest,
  addContactError,
  addContactSuccess,
  setError,
  resetError,
} from "./actions";

const items = createReducer([], {
  [fecthContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fecthContactsRequest]: () => true,
  [fecthContactsSuccess]: () => false,
  [fecthContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const error = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

export default combineReducers({ items, filter, loading, error });
