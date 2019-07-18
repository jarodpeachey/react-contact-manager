/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import {
  browserHistory, BrowserRouter,
} from 'react-router';
// import { useScroll } from 'react-router-scroll';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import muiTheme from './mui-theme';
import styledTheme from './styled-theme';
import routes from './Routes';

function startApp () {
  render(
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={styledTheme}>
        <BrowserRouter
          history={browserHistory}
        >
          {routes()}
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>, document.getElementById('app'),
  );
}

startApp();
