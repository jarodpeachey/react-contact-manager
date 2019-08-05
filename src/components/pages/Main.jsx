import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Card, CardContent } from '@material-ui/core';
import ContactsList from '../Contacts/ContactsList';
import AddContact from '../Contacts/AddContact';
import { getContacts } from '../../actions/contactActions';
import { testConnection } from '../../actions/connectionAction';

class Main extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    connectionStatus: PropTypes.number,
    getContacts: PropTypes.func,
    testConnection: PropTypes.func,
  };

  constructor (props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {
    this.props.getContacts();
    this.props.testConnection();
  }

  shouldComponentUpdate (nextProps) {
    if (this.props.contacts !== nextProps.contacts) {
      return true;
    }
    if (this.props.connectionStatus !== nextProps.connectionStatus) {
      return true;
    }
    return false;
  }

  render () {
    const { contacts, connectionStatus } = this.props;

    let contactsListContents = (
      <Card>
        <CardContent>
          Loading Contacts...
        </CardContent>
      </Card>
    );

    const setNoConnection = () => {
      contactsListContents = (
        <Card>
          <CardContent>
            There was an error fetching your contacts. Please check your internet connection
          </CardContent>
        </Card>
      );
    };

    if (!contacts && !connectionStatus) {
      setTimeout(setNoConnection, 3000);
    } else if (!contacts && connectionStatus) {
      contactsListContents = (
        <Card>
          <CardContent>
            No Contacts
          </CardContent>
        </Card>
      );
    } else if (contacts && connectionStatus) {
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
