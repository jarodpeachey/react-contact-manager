import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actions/types';

const initialState = {

};

// function compare (a, b) {
//   const contactA = a.name;
//   const contactB = b.name;

//   let comparison = 0;
//   if (contactA > contactB) {
//     comparison = 1;
//   } else if (contactA < contactB) {
//     comparison = -1;
//   }
//   return comparison;
// }

// console.log('REVERSE SORT BY NAME');
// state.contacts.sort(compare);

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
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
