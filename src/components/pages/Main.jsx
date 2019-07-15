import React, { Component } from 'react';
import styled from 'styled-components';
import ContactsList from '../ContactsList';

class Main extends Component {
  render () {
    const contacts = [
      {
        id: 1,
        name: 'John Smith',
        email: 'jsmith@mail.com',
        phone: '555-555-1115',
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'jdoe@mail.com',
        phone: '111-111-5551',
      },
    ];

    return (
      <div>
        <div className="container pt-lg">
          <Heading>
            <h2>Contacts</h2>
          </Heading>
          <ContactsList contacts={contacts} />
        </div>
      </div>
    );
  }
}

const Heading = styled.div`
  color: ${({ theme }) => theme.colors.main};
`;

export default Main;
