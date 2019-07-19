import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actions/types';

const initialState = {
  contacts: [
    {
      id: 0,
      name: 'Contact 0',
      email: 'contact0@mail.com',
      phone: '000-000-0000',
    },
    {
      id: 1,
      name: 'Contact 1',
      email: 'contact1@mail.com',
      phone: '111-111-1111',
    },
    {
      id: 2,
      name: 'Contact 2',
      email: 'contact2@mail.com',
      phone: '222-222-2222',
    },
    {
      id: 3,
      name: 'Contact 3',
      email: 'contact3@mail.com',
      phone: '333-333-3333',
    },
  ],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case DELETE_CONTACT:
      console.log('Deleting contact:', action.payload);
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactReducer;
