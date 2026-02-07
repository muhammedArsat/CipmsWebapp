import  { createContext, useContext } from "react"

export type ThemeMode = "light" | "dark"

interface ThemeContextType {
    mode: ThemeMode
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
)

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useThemeContext must be used within ThemeProvider")
    }
    return context
}
