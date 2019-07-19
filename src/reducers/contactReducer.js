const initialState = {
  contact0: {
    id: 0,
    name: 'Contact 0',
    email: 'contact0@mail.com',
    phone: '000-000-0000',
  },
  contact1: {
    id: 1,
    name: 'Contact 1',
    email: 'contact1@mail.com',
    phone: '111-111-1111',
  },
  contact2: {
    id: 2,
    name: 'Contact 2',
    email: 'contact2@mail.com',
    phone: '222-222-2222',
  },
  contact3: {
    id: 3,
    name: 'Contact 3',
    email: 'contact3@mail.com',
    phone: '333-333-3333',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
