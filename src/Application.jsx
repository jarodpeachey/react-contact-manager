import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import muiTheme from './mui-theme';
import styledTheme from './styled-theme';
// import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/pages/Main';
import store from './Store';

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
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={styledTheme}>
            <Router>
              <div className="app">
                {header}
                <Switch>
                  <Route exact path="/" component={Main} />
                </Switch>
              </div>
            </Router>
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default Application;

