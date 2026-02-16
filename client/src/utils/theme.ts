import { createTheme } from "@mui/material";


type modePros = "dark"|"light"
export function getTheme (mode:modePros){
  return createTheme({
    palette: {
      mode,
      primary: { main: "#1976d2" },
      background: {
        default: mode === "dark" ? "#121212" : "#fff",
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
    },
    typography: {
      fontFamily: `"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif`,

      h1: {
        fontWeight: 700,
        fontSize: "2.5rem",
        fontFamily: "Open sans",
      },
      h2: {
        fontWeight: 600,
        fontSize: "2rem",
        fontFamily: "Open sans",
      },
      h3: {
        fontWeight: 600,
        fontFamily: "Open sans",
      },
      h4:{
        fontFamily:"Open sans",
      },
      body1: {
        fontSize: "1rem",
      },
      body2: {
        fontSize: "0.875rem",
      },
      button: {
        textTransform: "none", // disables ALL CAPS
        fontWeight: 500,
      },
    },
  });
};
