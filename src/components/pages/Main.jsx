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
        {
          id: 2,
          name: 'John Doe',
          email: 'jdoe@mail.com',
          phone: '111-111-5551',
        },
        {
          id: 3,
          name: 'John Doe',
          email: 'jdoe@mail.com',
          phone: '111-111-5551',
        },
        {
          id: 4,
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
    const contactsArray = this.state.contacts ? this.state.contacts : [];
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
    const contactsArray = this.state.contacts;
    const newContactsArray = [];

    contactsArray.forEach((contactItem) => {
      if (contactItem.id !== id) {
        newContactsArray.push(contactItem);
      }
    });

    if (newContactsArray.length) {
      this.setState({ contacts: newContactsArray });
    } else {
      this.setState({ contacts: null });
    }
  }

  render () {
    const { contacts } = this.state;

    if (!contacts) {
      console.log('Empty contacts')
    }

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
          {!contacts ? (
            null
          ) : (
            <Card className="p-sm">
              <CardContent>
                <Heading>
                  <h3 className="m-none">Contacts</h3>
                </Heading>
                <ContactsList removeContactItem={this.removeContactItem} contacts={contacts} />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }
}

const Heading = styled.div`
  width: 100%;
  background: #f7f7f7;
  padding: 24px 0;
  margin-bottom: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
  font-size: 18px;
`;

export default Main;
