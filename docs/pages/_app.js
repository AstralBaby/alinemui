import "../css/index.css"
import '../../dist/index.css'
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import { ThemeProvider } from '@mui/material'
import { AlineProvider, useTheme } from "../../dist"

export default function MyApp({ Component, pageProps }) {  
  return <AlineProvider>
    <Component {...pageProps} />
  </AlineProvider>
}