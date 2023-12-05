import { darken, hexToRgb, lighten } from "@mui/material";
import defaultTailwind from "tailwindcss/defaultConfig"
import resolveConfig from "tailwindcss/resolveConfig"

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

  interface TabsOwnProps {
    variant: "contained"
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


const returnIf = (property: any, value: string, returns: any) => property === value && returns
const {theme: tw} = resolveConfig(defaultTailwind)

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
    MuiCheckbox: {

    },
    MuiStepper: {
      defaultProps: {
        alternativeLabel: true
      },
    },
    MuiStepConnector: {
      defaultProps: {
        alternativeLabel: {
          top: 50
        }
      },
      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-active": {
            '& .MuiStepConnector-line': {
              borderColor: theme.palette.primary.main // Change the color of the connector line when active
            },
          }
        })
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-active": {
            borderColor: theme.palette.primary.main, // Change the color of the connector line when active
            "--tw-ring-color": lighten(theme.palette.primary.main, .7),
            ":is(.dark &)": {
              "--tw-ring-color": darken(theme.palette.primary.main, .6),
            }
          }
        })
      }
    },
    MuiPagination: {
      defaultProps: {
        shape: "rounded",
        color: "primary"
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({theme}) => ({
          color: theme.palette.text.secondary
        })
      }
    },
    MuiTabs: {
      variants: [
        {
          props: { variant: "contained" }
        },
      ],
      styleOverrides: {
        indicator: ({ ownerState }) => returnIf(ownerState.variant, "contained", {display: "none"}),
        flexContainer: ({ ownerState, theme }) => ({
          "button": {
            minHeight: 0,
            "&.Mui-selected": returnIf(ownerState.variant, "contained", {
              background: theme.palette.secondary.main,
              borderRadius: tw.borderRadius['lg'],
              minHeight: 0,
            })
          }
        })
      }
    }
    // MuiListItemText: {
    //   styleOverrides: {
    //     root: ({theme}) => ({
    //       color: theme.palette.text.secondary
    //     })
    //   }
    // }
  }
};

export default theme;