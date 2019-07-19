import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from './types';

export const getContacts = () => ({ type: GET_CONTACTS });

export const addContact = (id, name, email, phone) => ({ type: ADD_CONTACT, payload: { id, name, email, phone } });

export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });
