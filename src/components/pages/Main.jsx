import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Card, CardContent, CircularProgress } from '@material-ui/core';
import ContactsList from '../Contacts/ContactsList';
import AddContact from '../Contacts/AddContact';
import { getContacts } from '../../actions/contactActions';
import { testConnection } from '../../actions/connectionAction';

class Main extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    connectionStatus: PropTypes.bool,
    getContacts: PropTypes.func,
    testConnection: PropTypes.func,
  };

  constructor (props) {
    super(props);
    this.state = {
      contactsListContents: (
        <Card>
          <CardContent>
            <div className="center-text mb-sm">
              <CircularProgress />
            </div>
            <div className="center-text full-width">
              Loading Contacts...
            </div>
          </CardContent>
        </Card>
      ),
    };
  }

  componentDidMount () {
    this.props.getContacts();

    this.props.testConnection();

    if (this.props.connectionStatus === true) {
      setTimeout(() => {
        this.setState({ connectionTested: true });
      }, 7000);
    } else if (this.props.connectionStatus !== true) {
      setTimeout(() => {
        this.setState({ connectionTested: true });
      }, 1500);
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.contacts !== nextProps.contacts) {
      return true;
    }
    if (this.props.connectionStatus !== nextProps.connectionStatus) {
      return true;
    }
    if (this.state.connectionTested !== nextState.connectionTested) {
      return true;
    }
    return false;
  }

  render () {
    const { contacts, connectionStatus } = this.props;

    let { contactsListContents } = this.state;

    if (this.state.connectionTested && !contacts && !connectionStatus) {
      contactsListContents = (
        <Card>
          <CardContent>
            There was an error fetching your contacts. Please check your internet connection
          </CardContent>
        </Card>
      );
    } else if (this.state.connectionTested && !contacts && connectionStatus) {
      contactsListContents = (
        <Card>
          <CardContent>
            No Contacts
          </CardContent>
        </Card>
      );
    } else if (this.state.connectionTested && contacts && connectionStatus) {
      contactsListContents = (
        <Card className="p-sm">
          <CardContent>
            <Heading>
              <h3 className="m-none">Contacts List</h3>
            </Heading>
            <ContactsList contacts={contacts} />
          </CardContent>
        </Card>
      );
    }

    return (
      <div>
        <div className="container pt-lg">
          <Card className="mb-sm p-sm">
            <CardContent>
              <Heading>
                <h3 className="m-none">Add Contact</h3>
              </Heading>
              <AddContact contacts={contacts} />
            </CardContent>
          </Card>
          {contactsListContents}
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
  connectionStatus: state.connectionStatus,
});

export default connect(mapStateToProps, { getContacts, testConnection })(Main);
