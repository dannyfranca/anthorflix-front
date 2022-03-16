import React from "react";
import "./App.css";
import "./i18t";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
