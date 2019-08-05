import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormControl, TextField, withStyles, Button } from '@material-ui/core';
import { addContact } from '../../actions/contactActions';
import { sortByContactId } from '../../utils/arrayFormat';

class AddContact extends Component {
  static propTypes = {
    classes: PropTypes.object,
    addContact: PropTypes.func,
    contacts: PropTypes.array,
    connectionStatus: PropTypes.bool,
  };

  constructor (props) {
    super(props);
    this.state = {
      nameInputValue: '',
      emailInputValue: '',
      phoneInputValue: '',
      emailInputError: false,
      phoneInputError: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount () {

  }

  shouldComponentUpdate (nextState) {
    if (this.state.nameInputValue !== nextState.nameInputValue) {
      return true;
    }
    if (this.state.emailInputValue !== nextState.emailInputValue) {
      return true;
    }
    if (this.state.phoneInputValue !== nextState.phoneInputValue) {
      return true;
    }
    if (this.state.inputError !== nextState.inputError) {
      return true;
    }

    return false;
  }

  onInputChange (e) {
    if (e.target.id === 'name') {
      this.setState({ nameInputValue: e.target.value });
    } else if (e.target.id === 'email') {
      this.setState({ emailInputValue: e.target.value });

      const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

      if (regex.test(e.target.value)) {
        this.setState({ emailInputError: false });
      } else {
        this.setState({ emailInputError: true });
      }
    } else if (e.target.id === 'phone') {
      this.setState({ phoneInputValue: e.target.value });

      const regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;

      if (regex.test(e.target.value)) {
        this.setState({ phoneInputError: false });
      } else {
        this.setState({ phoneInputError: true });
      }
    }
  }

  onSubmitForm () {
    if (this.state.emailInputError || this.state.phoneInputError || this.state.emailInputValue === '' || this.state.nameInputValue === '' || this.state.phoneInputValue === '') {
      alert('Please fill in all the fields correctly');
    } else {
      let id = 1;

      if (this.props.contacts) {
        const sortedContacts = sortByContactId(this.props.contacts);

        id = sortedContacts[sortedContacts.length - 1].id + 1;
      }

      const { emailInputValue, phoneInputValue, nameInputValue } = this.state;

      if (this.props.connectionStatus === true) {
        this.props.addContact(id, nameInputValue, emailInputValue, phoneInputValue);

        this.setState({ emailInputValue: '', phoneInputValue: '', nameInputValue: '' });
      } else {
        alert('There was an error connecting to the internet');
      }
    }
  }

  render () {
    const { classes } = this.props;
    const { nameInputValue, emailInputValue, phoneInputValue } = this.state;

    return (
      <FormControl fullWidth>
        <TextField
          classes={{ root: classes.textField }}
          value={nameInputValue}
          id="name"
          label="Name"
          fullWidth
          variant="outlined"
          margin="dense"
          onChange={this.onInputChange}
        />
        <TextField
          classes={{ root: classes.textField }}
          value={emailInputValue}
          id="email"
          label="Email"
          fullWidth
          variant="outlined"
          margin="dense"
          onChange={this.onInputChange}
          error={this.state.emailInputError}
        />
        <TextField
          classes={{ root: classes.textField }}
          value={phoneInputValue}
          id="phone"
          label="Phone"
          fullWidth
          variant="outlined"
          margin="dense"
          onChange={this.onInputChange}
          error={this.state.phoneInputError}
        />
        <Button
          color="primary"
          variant="contained"
          className="m-none"
          classes={{ root: classes.button }}
          onClick={this.onSubmitForm}
        >
          Add Contact
        </Button>
      </FormControl>
    );
  }
}

const styles = () => ({
  textField: {
    margin: '0 0 16px',
  },
  button: {
    height: 48.4,
  },
});

export default connect(null, { addContact })(withStyles(styles)(AddContact));
