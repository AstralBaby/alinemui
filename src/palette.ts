import { PaletteMode, ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material";
import themeConfig from "../tailwind.config.cjs"
import resolveConfig from "tailwindcss/resolveConfig"
import colors from "tailwindcss/colors"

// remove custom color PRIMARY and use tailwind instead, allowing customization

const { theme: { extend }} = themeConfig

export default (mode: PaletteMode) => ({
    mode,
    ...(mode === "light" ? LightPalette : DarkPalette)
})

const { palette: { augmentColor } } = createTheme();
const createColor = (base: string) => augmentColor({ color: { main: base } });

const LightPalette: ThemeOptions["palette"] = {
    mode: "light",
    primary: {
        main: colors.blue[600],
        light: colors.blue[700]
    },
    secondary: {
        light: colors.gray[100],
        main: colors.gray[200],
        dark: colors.gray[300],
    },
    background: {
      default: colors.white,
      paper: colors.white,
      
    },
    text: {
        primary: colors.gray[700],
        secondary: colors.gray[600]
    }
} as const


const DarkPalette: ThemeOptions["palette"] = {
    mode: "dark",
    primary: {
        main: colors.blue[600],
        light: colors.blue[700],
        contrastText: colors.white
    },
    secondary: {
        light: colors.gray[600],
        main: colors.gray[800],
        dark: colors.gray[700],
        contrastText: colors.white
    },
    background: {
      default: colors.neutral[800],
      paper: colors.neutral[800],
    },
    text: {
        primary: colors.neutral[100],
        secondary: colors.neutral[200]
    }
} as const


export {LightPalette, DarkPalette}