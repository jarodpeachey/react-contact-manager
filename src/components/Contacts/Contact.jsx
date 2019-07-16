import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Delete from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object,
    classes: PropTypes.object,
    removeContactItem: PropTypes.func,
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
    const { contact, classes } = this.props;
    return (
      <ContactContainer>
        <Name>{contact.name}</Name>
        <IconButton classes={{ root: classes.iconButtonSmall }}>
          <ArrowDropDown />
        </IconButton>
        <CloseIcon>
          <IconButton onClick={() => { this.props.removeContactItem(contact.id); }} classes={{ root: classes.iconButton }}>
            <Delete />
          </IconButton>
        </CloseIcon>
        {/* <ul className="mb-sm">
          <li>{contact.email}</li>
          <li>{contact.phone}</li>
        </ul> */}
      </ContactContainer>
    );
  }
}

const styles = () => ({
  iconButton: {
    padding: 10,
  },
  iconButtonSmall: {
    padding: 2,
    marginLeft: 4,
  },
});

const ContactContainer = styled.div`
  display: flex;
  border: 1px solid #ddd;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 16px;
  margin: 12px 0;
`;

const Name = styled.h4`
  font-weight: bold;
  margin: 0;
`;

const CloseIcon = styled.div`
  margin-left: auto;
  font-weight: 10px;
`;

export default withStyles(styles)(Contact);
