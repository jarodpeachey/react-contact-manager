import axios from 'axios';
import 'babel-polyfill';
import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from './types';

export const getContacts = () => async (dispatch) => {
  const res = await axios.get('https://contactmanager-api.herokuapp.com/contacts');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data,
  });
};

export const addContact = (id, name, email, phone) => async (dispatch) => {
  const contact = {
    id,
    name,
    email,
    phone,
  };

  const response = await axios.post('https://contactmanager-api.herokuapp.com/contacts', contact)
    .then((res) => { console.log(res); })
    .catch((err) => { console.log(err); });

  dispatch({
    type: ADD_CONTACT,
    payload: response,
  });
};

export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });
