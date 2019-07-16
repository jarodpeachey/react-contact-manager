import React, { Component } from 'react';
import styled from 'styled-components';
import ContactsList from '../Contacts/ContactsList';

class Main extends Component {
  static propTypes = {

  };

  constructor (props) {
    super(props);
    this.state = {
      contacts: [
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
      ],
    };

    this.removeContact = this.removeContact.bind(this);
  }

  componentDidMount () {

  }

  shouldComponentUpdate (nextState, nextProps) {
    if (this.state.contacts !== nextState.contacts) {
      console.log('re-render');
      return true;
    }
    return false;
  }

  removeContact (id) {
    const { contacts } = this.state;

    const newContacts = [];

    contacts.forEach((contactItem) => {
      if (contactItem.id !== id) {
        newContacts.push(contactItem);
      }
    });

    this.setState({ contacts: newContacts });

    console.log('New contacts:', newContacts);
  }

  render () {
    const { contacts } = this.state;

    return (
      <div>
        <div className="container pt-lg">
          <Heading>
            <h2>Contacts</h2>
          </Heading>
          <ContactsList removeContact={this.removeContact} contacts={contacts} />
        </div>
      </div>
    );
  }
}

const Heading = styled.div`
  color: ${({ theme }) => theme.colors.main};
`;

export default Main;
