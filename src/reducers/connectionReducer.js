import { TEST_CONNECTION } from '../actions/types';

const initialState = null;

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

const connectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_CONNECTION:
      return action.payload;
    default:
      return state;
  }
};

export default connectionReducer;
