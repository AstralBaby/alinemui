import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["Inter", 'sans-serif'].join(","),
    heading: true,
    subheading: true,
    title: true,
    article: true,
    caption: true,
    blockquote: true,
  },
  palette: {
    mode: 'light',
    default: "white",
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    accent: {
      main: '#e5e7eb'
    },
    error: {
      main: red.A400,
    },
  },
  //custom theme overrides
  components: {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      }
    },
    MuiPaper: {
      defaultProps: {
        square: false
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "icon" }
        }
      ],
      defaultProps: {
        variant: "contained",
        color: "default"
      },
    },
    MuiInputBase: {
      defaultProps: {
        size: "small"
      }
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      }
    },
    MuiOutlinedInput: {
      defaultProps: {
        notched: false,
      },
    },
  }
});

export default theme;