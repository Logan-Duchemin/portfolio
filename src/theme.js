import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c4dff',
    },
    secondary: {
      main: '#00bcd4',
    },
    background: {
      default: '#0d0d0d',
      paper: '#1a1a2e',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h4: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(124, 77, 255, 0.12)',
          color: '#b47aff',
          border: '1px solid rgba(124, 77, 255, 0.25)',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
