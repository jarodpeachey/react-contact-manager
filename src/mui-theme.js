import { createMuiTheme } from '@material-ui/core/styles';

const overrides = {
  MuiButton: {
    root: {
      userSelect: 'none',
      outline: 'none',
      margin: '8px',
    },
  },
};

const breakpoints = {
  keys: ['sm', 'md', 'lg', 'xl'],
  values: {
    sm: '540px',
    md: '769px',
    lg: '1024px',
    xl: '1220px',
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF6347',
      dark: '#e5593f',
      contrastText: '#f7f7f7',
    }, // Feel free to change this
    secondary: {
      main: '#1dc798',
      dark: '#1dc798',
      contrastText: '#333',
    }
  },
  breakpoints,
  overrides,
  typography: {
    useNextVariants: true,
  },
});

export default theme;
