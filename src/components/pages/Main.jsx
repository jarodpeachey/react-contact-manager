import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';
import ContactsList from '../Contacts/ContactsList';
import AddContact from '../Contacts/AddContact';

class Main extends Component {
  static propTypes = {

  };

  constructor (props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 0,
          name: 'John Smith',
          email: 'jsmith@mail.com',
          phone: '555-555-1115',
        },
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@mail.com',
          phone: '111-111-5551',
        },
      ],
    };

    this.removeContactItem = this.removeContactItem.bind(this);
    this.addContactItem = this.addContactItem.bind(this);
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

  addContactItem (name, email, phone) {
    const contactsArray = this.state.contacts;
    const newContactsArray = [];
    const id = contactsArray.length + 1;

    const newContact = {
      id,
      name,
      email,
      phone,
    };

    contactsArray.forEach((contactItem) => {
      newContactsArray.push(contactItem);
    });

    newContactsArray.push(newContact);

    this.setState({ contacts: newContactsArray });
  }

  removeContactItem (id) {
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
          <Card className="mb-sm p-sm">
            <CardContent>
              <Heading>
                <h3 className="m-none">Add Contact</h3>
              </Heading>
              <AddContact addContactItem={this.addContactItem} />
            </CardContent>
          </Card>
          <Card className="p-sm">
            <CardContent>
              <Heading>
                <h3 className="m-none">Contacts</h3>
              </Heading>
              <ContactsList removeContactItem={this.removeContactItem} contacts={contacts} />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

const Heading = styled.div`
  color: ${({ theme }) => theme.colors.main};
`;

export default Main;
