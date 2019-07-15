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
    this.state.contacts.filter(contact => contact.id !== id);
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

