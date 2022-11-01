import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { colors } from '@mui/material';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: colors.common.white,
      dark: '#F4F6F8',
      paper: colors.common.white
    },
    primary: {
      main: '#f44336'
    },
    secondary: {
      main: '#3EA6FF'
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 500,
      fontSize: 35,
      letterSpacing: '-0.24px'
    },
    h2: {
      fontWeight: 500,
      fontSize: 29,
      letterSpacing: '-0.24px'
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: '-0.06px'
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: '-0.06px'
    },
    h5: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: '-0.05px'
    },
    h6: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: '-0.05px'
    },
    subtitle1: {
      fontSize: 16,
      letterSpacing: '-0.05px'
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: '-0.05px'
    },
    body1: {
      fontSize: 16,
      letterSpacing: '-0.05px'
    },
    body2: {
      fontSize: 14,
      letterSpacing: '-0.04px'
    },
    button: {
      fontSize: 14
    },
    caption: {
      fontSize: 12,
      letterSpacing: '0.4px'
    },
    overline: {
      fontSize: 10,
      letterSpacing: '0.4px'
    }
  }
});

export default theme;
