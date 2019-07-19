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

  componentWillReceiveProps (nextProps) {
    if (this.props.contacts !== nextProps.contacts) {
      this.setState({ contacts: nextProps.contacts });
    }
  }

  shouldComponentUpdate (nextState, nextProps) {
    if (this.state.contacts !== nextState.contacts) {
      return true;
    }
    return false;
  }

  render () {
    const { contacts } = this.state;

    return (
      <>
        {contacts ? contacts.map(contact => <Contact contact={contact} />) : null}
      </>
    );
  }
}

export default ContactsList;
