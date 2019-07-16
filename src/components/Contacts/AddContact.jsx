import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper, FormControl, TextField, withStyles, Button } from '@material-ui/core';

class AddContact extends Component {
  static propTypes = {
    classes: PropTypes.object,
    addContactItem: PropTypes.func,
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
      const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

      if (regex.test(e.target.value)) {
        this.setState({ emailInputValue: e.target.value });
        this.setState({ emailInputError: false });
      } else {
        this.setState({ emailInputError: true });
      }
    } else if (e.target.id === 'phone') {
      const regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;

      if (regex.test(e.target.value)) {
        this.setState({ phoneInputValue: e.target.value });
        this.setState({ phoneInputError: false });
      } else {
        this.setState({ phoneInputError: true });
      }
    }
  }

  onSubmitForm (e) {
    e.preventDefault();

    if (this.state.emailInputError || this.state.phoneInputError || this.state.emailInputValue === '' || this.state.nameInputValue === '' || this.state.phoneInputValue === '') {
      alert('Please fill in all the fields correctly');
    } else {
      const { emailInputValue, phoneInputValue, nameInputValue } = this.state;
      this.props.addContactItem(nameInputValue, emailInputValue, phoneInputValue);
    }
  }

  render () {
    const { classes } = this.props;

    return (
      <FormControl fullWidth className="mt-sm">
        <TextField
          classes={{ root: classes.textField }}
          id="name"
          label="Name"
          fullWidth
          variant="outlined"
          margin="dense"
          onChange={this.onInputChange}
        />
        <TextField
          classes={{ root: classes.textField }}
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
          className="mx-none"
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
    margin: '8px 0',
  },
  button: {
    height: 48.4,
  },
});

export default withStyles(styles)(AddContact);
