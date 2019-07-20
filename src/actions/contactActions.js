import axios from 'axios';
import 'babel-polyfill';
import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from './types';

export const getContacts = () => async (dispatch) => {
  const res = await axios.get('https://my-json-server.typicode.com/jarodpeachey/react-contact-manager-api/contacts');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data,
  });
};

export const addContact = (id, name, email, phone) => ({ type: ADD_CONTACT, payload: { id, name, email, phone } });

export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });
