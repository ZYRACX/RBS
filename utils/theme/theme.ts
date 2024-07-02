// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // You can choose any primary color
    },
    secondary: {
      main: '#f50057', // Any secondary color
    },
    background: {
      default: '#f5f5f5', // Background color
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
    },
  },
});

export default theme;
