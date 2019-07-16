import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Contact from './Contact';

class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.array,
  };

  constructor (props) {
    super(props);
    this.state = {
      contacts: [],
    };

    this.removeContact = this.removeContact.bind(this);
  }

  componentDidMount () {
    this.setState({ contacts: this.props.contacts });
  }

  shouldComponentUpdate (nextState, nextProps) {
    if (this.state.contacts !== nextState.contacts) {
      return true;
    }
    return false;
  }

  removeContact (id) {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  }

  render () {
    const { contacts } = this.state;
    return (
      <div>
        {contacts ? contacts.map(contact => <Contact contact={contact} removeContact={this.removeContact} />) : null}
      </div>
    );
  }
}

export default ContactsList;
