declare module '@mui/material/styles' {
  interface TypographyVariants {
    heading: React.CSSProperties;
    subheading?: React.CSSProperties;
    article?: React.CSSProperties;
    caption?: React.CSSProperties;
    blockquote?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    subheading?: React.CSSProperties;
    article?: React.CSSProperties;
    caption?: React.CSSProperties;
    blockquote?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading: true;
    subheading: true;
    h3: false;
  }
}
// declare module '@mui/material/styles' {
//   interface Palette {
//     accent: Palette['primary'];
//   }

//   interface PaletteOptions {
//     accent: PaletteOptions['primary'];
//   }
// }
// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     accent: true
//   }
// }

const theme = {
  typography: {
    fontFamily: ["Inter", 'sans-serif'].join(","),
    heading: { color: "black" },
    subheading: { color: "black" },
    article:  { color: "black" },
    caption: {},
    blockquote: { color: "black" },
  },
  //custom theme overrides
  components: {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      } as const
    },
    MuiPaper: {
      defaultProps: {
        square: false
      } as const
    },
    MuiButton: {
      defaultProps: {
        variant: "contained"
      } as const
    },
    MuiButtonBase: {
      defaultProps: {
        color: "secondary"
      } as const,
    },
    MuiInputBase: {
      defaultProps: {
        size: "small"
      } as const,
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
    MuiStepper: {
      defaultProps: {
        alternativeLabel: true
      }
    }
  }
};

export default theme;