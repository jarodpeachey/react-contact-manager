import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object,
  };

  constructor (props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {

  }

  shouldComponentUpdate (nextProps) {
    if (this.props.contact !== nextProps.contact) {
      return true;
    }

    return false;
  }

  render () {
    const { contact } = this.props;
    return (
      <>
        <h4 className="m-none">{contact.name}</h4>
        <ul className="mb-sm">
          <li>{contact.email}</li>
          <li>{contact.phone}</li>
        </ul>
      </>
    );
  }
}

export default Contact;
