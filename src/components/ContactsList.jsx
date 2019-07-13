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

    };
  }

  componentDidMount () {

  }

  shouldComponentUpdate () {

  }

  render () {
    const { contacts } = this.props;
    return (
      <div>
        {contacts.map(contact => <Contact contact={contact} />)}
      </div>
    );
  }
}

export default ContactsList;

