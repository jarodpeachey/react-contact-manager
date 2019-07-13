import React, { Component } from 'react';
import ContactsList from '../ContactsList';

class Main extends Component {
  render () {
    const contacts = [
      {
        name: 'John Smith',
        email: 'jsmith@mail.com',
        phone: '555-555-1115',
      },
      {
        name: 'John Doe',
        email: 'jdoe@mail.com',
        phone: '111-111-5551',
      },
    ];

    return (
      <div>
        <div className="container">
          <h1>Contacts</h1>
          <ContactsList contacts={contacts} />
        </div>
      </div>
    );
  }
}

export default Main;
