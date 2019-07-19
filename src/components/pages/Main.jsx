import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Card, CardContent } from '@material-ui/core';
import ContactsList from '../Contacts/ContactsList';
import AddContact from '../Contacts/AddContact';
import { getContacts } from '../../actions/contactActions';

class Main extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    getContacts: PropTypes.func,
  };

  constructor (props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {
    this.props.getContacts();
  }

  componentWillReceiveProps (nextProps) {
    this.props.getContacts();
  }

  shouldComponentUpdate (nextProps) {
    if (this.props.contacts !== nextProps.contacts) {
      return true;
    }
    return false;
  }

  render () {
    const { contacts } = this.props;

    if (!contacts) {
      console.log('Empty contacts');
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
          {!contacts ? (
            null
          ) : (
            <Card className="p-sm">
              <CardContent>
                <Heading>
                  <h3 className="m-none">Contacts List</h3>
                </Heading>
                <ContactsList contacts={contacts} />
              </CardContent>
            </Card>
          )}
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
});

export default connect(mapStateToProps, { getContacts })(Main);
