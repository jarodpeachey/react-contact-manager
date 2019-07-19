import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actions/types';

const initialState = {
  contacts: [
    {
      id: 3,
      name: 'James Brown',
      email: 'jbrown@mail.com',
      phone: '333-333-3333',
    },
    {
      id: 0,
      name: 'Anna Martin',
      email: 'amartin1@mail.com',
      phone: '000-000-0000',
    },
    {
      id: 2,
      name: 'Bill Arthur',
      email: 'bill_arthur@mail.com',
      phone: '222-222-2222',
    },
    {
      id: 1,
      name: 'Jarod Peachey',
      email: 'jpeachey_1@mail.com',
      phone: '111-111-1111',
    },
  ],
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
