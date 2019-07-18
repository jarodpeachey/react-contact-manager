import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import muiTheme from './mui-theme';
import styledTheme from './styled-theme';
// import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/pages/Main';

class Application extends Component {
  static propTypes = {
    // children: PropTypes.element,
  };

  constructor (props) {
    super(props);
    this.state = {

    };
  }

  // componentDidMount () {

  // }

  // shouldComponentUpdate () {

  // }

  render () {
    const header = <Header />;

    return (
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={styledTheme}>
          <Router>
            <div className="app">
              {header}
              <Switch>
                <Route exact path="/react-contact-manager" component={Main} />
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default Application;

