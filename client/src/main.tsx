import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { getTheme } from './utils/theme.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ThemeContext } from './contexts/ThemeContext.tsx'


const Root: React.FC = () => {

  const [mode, setMode] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : "light"
  })

  const theme = useMemo(() => getTheme(mode), [mode])

  useEffect(() => localStorage.setItem("theme", mode), [mode])


  const toggleTheme = () => {

    setMode((prev) => (prev === "light" ? "dark" : "light"))

  }
  return (
    <ThemeContext.Provider value={{mode, toggleTheme}}>

      <ThemeProvider theme={theme} >
        <CssBaseline />
        <App/>

      </ThemeProvider>
    </ThemeContext.Provider>

  )
}
createRoot(document.getElementById('root')!).render(
  <Root />
)
