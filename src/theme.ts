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
    // Fix for use with tailwind.
      styleOverrides: {
        root: ({ownerState, theme}) => {
          if (ownerState.variant === "contained")
          return {
            "&:not(:hover)": {
              backgroundColor: theme.palette[ownerState.color].main + " !important"
            }
          }
          if (ownerState.variant === "outlined")
          return {
            color: theme.palette.text.primary,
            "&:hover": { color: theme.palette[ownerState.color].main },
            // ":is(.dark &)": { color: theme.palette[ownerState.color].main }
          }
          if (ownerState.variant === "text")
          return {
            color: theme.palette.primary.light,
            // "&:hover": { color: theme.palette[ownerState.color].main },
          }
        }
      },
      defaultProps: {
        variant: "contained"
      } as const
    },
    MuiButtonBase: {
      defaultProps: {
        // color: "secondary"
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
    },
    MuiPagination: {
      defaultProps: {
        shape: "rounded",
        color: "primary"
      }
    }
  }
};

export default theme;