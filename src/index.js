/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import {
  browserHistory,
  Router,
  Route,
  IndexRedirect,
} from 'react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import muiTheme from './mui-theme';
import styledTheme from './styled-theme';
import Application from './Application';
import Main from './components/pages/Main';
// import { useScroll } from 'react-router-scroll';

function startApp () {
  render(
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={styledTheme}>
        <Router
          history={browserHistory}
        >
          <Route path="/" component={Application}>
            {
            (function runFunction () {
              return <IndexRedirect to="/welcome" />;
            }())
            }
            <Route path="/welcome" component={Main} />
          </Route>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>, document.getElementById('app'),
  );
}

startApp();
