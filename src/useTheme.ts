import { useMemo, useState } from "react"
import { LightPalette, DarkPalette } from "./palette"
import { createTheme } from "@mui/material"
import baseTheme from "./theme"

const useTheme = () => {
    const [mode, setMode] = useState<"light"|"dark">("light")

    const theme = useMemo(() => createTheme({
        palette: mode === "dark" ? DarkPalette : LightPalette,
        ...baseTheme
    }), [mode])

    return {
        mode,
        setMode,
        theme,
    }
}

export default useTheme