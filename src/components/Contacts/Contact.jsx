import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Delete from '@material-ui/icons/Delete';
import Mail from '@material-ui/icons/Mail';
import Phone from '@material-ui/icons/Phone';
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
      showInformation: false,
    };

    this.toggleContactInformation = this.toggleContactInformation.bind(this);
  }

  componentDidMount () {

  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.contact !== nextProps.contact) {
      return true;
    }
    if (this.state.showInformation !== nextState.showInformation) {
      return true;
    }
    return false;
  }

  toggleContactInformation () {
    const informationBool = this.state.showInformation;

    this.setState({ showInformation: !informationBool });
  }

  render () {
    const { contact, classes } = this.props;
    const { showInformation } = this.state;

    return (
      <>
        {showInformation ? (
          <>
            <ContactContainer>
              <FlexContainer>
                <Name>{contact.name}</Name>
                <IconButton onClick={this.toggleContactInformation} classes={{ root: classes.iconButtonSmall }}>
                  <ArrowDropUp />
                </IconButton>
                <CloseIcon>
                  <IconButton onClick={() => { this.props.removeContactItem(contact.id); }} classes={{ root: classes.iconButton }}>
                    <Delete />
                  </IconButton>
                </CloseIcon>
              </FlexContainer>
            </ContactContainer>
            <InformationWrapper>
              <Seperator />
              <CollectionItem>
                <Mail className="mr-sm" />
                {contact.email}
              </CollectionItem>
              <CollectionItem>
                <Phone className="mr-sm" />
                {contact.phone}
              </CollectionItem>
            </InformationWrapper>
          </>
        ) : (
          <>
            <ContactContainerOutlined>
              <FlexContainer>
                <Name>{contact.name}</Name>
                <IconButton onClick={this.toggleContactInformation} classes={{ root: classes.iconButtonSmall }}>
                  <ArrowDropDown />
                </IconButton>
                <CloseIcon>
                  <IconButton onClick={() => { this.props.removeContactItem(contact.id); }} classes={{ root: classes.iconButton }}>
                    <Delete />
                  </IconButton>
                </CloseIcon>
              </FlexContainer>
            </ContactContainerOutlined>
            <InformationWrapperGhost>
              <Seperator />
              <CollectionItem>
                <Mail className="mr-sm" />
                {contact.email}
              </CollectionItem>
              <CollectionItem>
                <Phone className="mr-sm" />
                {contact.phone}
              </CollectionItem>
            </InformationWrapperGhost>
          </>
        )}
      </>
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

const slideDown = keyframes`
  0% {
    height: 0px;
    overflow: hidden;
  }
  2% {
    height: 2px;
  }
  100% {
    height: 160px;
    overflow: none;
  }
`;

const slideUp = keyframes`
  0% {
    height: 160px;
    overflow: none;
  }
  100% {
    height: 0px;
    overflow: hidden;
    padding-bottom: 0;
    padding-top: 0;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const ContactContainer = styled.div`
  border: 1px solid #ddd;
  border-bottom: none;
  padding: 8px 16px;
  margin: 12px 0 0;
  position: relative;
  z-index: 99;
  background: white;
`;

const ContactContainerOutlined = styled.div`
  border: 1px solid #ddd;
  border-bottom: none;
  padding: 8px 16px;
  margin: 12px 0 0;
`;

const FlexContainer = styled.div`
  align-items: center;
  justify-content: flex-start;
  display: flex;
`;

const Name = styled.h4`
  font-weight: bold;
  margin: 0;
`;

const CloseIcon = styled.div`
  margin-left: auto;
  font-weight: 10px;
`;

const InformationWrapper = styled.div`
  border: 1px solid #ddd;
  border-top: none;
  padding: 8px 16px;
  padding-top: 8px;
  animation-name: ${slideDown};
  animation-duration: .4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  margin-bottom: 0;
  width: 100%;
  z-index: -2;
`;

const InformationWrapperGhost = styled.div`
  border: 1px solid #ddd;
  border-top: none;
  padding: 8px 16px;
  padding-top: 8px;
  animation-name: ${slideUp};
  animation-duration: .4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  margin-bottom: 0;
  width: 100%;
  z-index: -2;
`;

const Seperator = styled.div`
  height: 2px;
  display: block;
  content: "";
  background: ${({ theme }) => theme.colors.main};
  width: 100%;
  margin: -8px auto 16px;
`;

const CollectionItem = styled.div`
  background: #f7f7f7;
  padding: 16px;
  margin: 8px 0;
  display: flex;
  align-items: center;
`;

export default withStyles(styles)(Contact);
