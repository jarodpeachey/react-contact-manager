import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Card, CardContent } from '@material-ui/core';
import ContactsList from '../Contacts/ContactsList';
import AddContact from '../Contacts/AddContact';
import { getContacts } from '../../actions/contactActions';

class Main extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    getContacts: PropTypes.func,
  };

  constructor (props) {
    super(props);
    this.state = {

    };

    this.addContactItem = this.addContactItem.bind(this);
  }

  componentDidMount () {
    this.props.getContacts();
  }

  componentWillReceiveProps () {
    this.props.getContacts();
  }

  shouldComponentUpdate (nextProps) {
    if (this.props.contacts !== nextProps.contacts) {
      return true;
    }
    return false;
  }

  addContactItem (name, email, phone) {
    const contactsArray = this.state.contacts ? this.state.contacts : [];
    const newContactsArray = [];
    const id = contactsArray[contactsArray.length - 1].id + 1;

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

  render () {
    const { contacts } = this.props;

    if (!contacts) {
      console.log('Empty contacts');
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
                <ContactsList contacts={contacts} />
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

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
});

export default connect(mapStateToProps, { getContacts })(Main);
