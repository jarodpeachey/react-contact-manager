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

  axios.post('https://contactmanager-api.herokuapp.com/contacts', contact)
    .then((res) => { console.log(res); })
    .catch((err) => { console.log(err); });

  dispatch({
    type: ADD_CONTACT,
    payload: contact,
  });
};

export const deleteContact = id => async (dispatch) => {
  await axios.delete(`https://contactmanager-api.herokuapp.com/contacts/${id}`);
  dispatch({
    type: DELETE_CONTACT,
    payload: id,
  });
};
