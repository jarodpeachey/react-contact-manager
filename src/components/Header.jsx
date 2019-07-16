import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

class Header extends Component {
  static propTypes = {

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
    return (
      <Wrapper>
        <div className="container py-xxs">
          <div className="center-text">
            <h2>Contact Manager</h2>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.main};
  color: white;
  box-shadow: 0 1px 10px 2px #999;
`;

export default Header;
