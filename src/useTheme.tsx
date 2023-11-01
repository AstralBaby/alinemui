import React from "react"
import { useContext, useEffect, useMemo, useState } from "react"
import { LightPalette, DarkPalette } from "./palette"
import { ThemeProvider, createTheme } from "@mui/material"
import baseTheme from "./theme"
import { createContext } from "react"

export const useTheme = () => {
    const { mode, setMode } = useContext(AlineContext)
    
    return {
        mode,
        setMode
    }
}

interface ContextProps {
    mode: "light" | "dark"
    setMode: (mode: "light" | "dark") => void
}

const AlineContext = createContext<ContextProps>(undefined)

export const AlineProvider = ({ children }) => {
    const [mode, setMode] = useState<"light"|"dark">("light")

    useEffect(() => {
        const root = document.documentElement;

        if (mode === "dark") root.classList.add("dark") 
        else root.classList.remove("dark")

    }, [mode])

    const theme = useMemo(() => createTheme({
        palette: mode === "dark" ? DarkPalette : LightPalette,
        ...baseTheme
    }), [mode])

    return <AlineContext.Provider value={{mode, setMode}}> 
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </AlineContext.Provider>
}