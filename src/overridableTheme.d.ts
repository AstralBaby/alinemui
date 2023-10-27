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