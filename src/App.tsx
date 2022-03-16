import React from "react";
import "./App.css";
import "./i18t";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./config/theme";
import NavBar from "./components/NavBar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Box paddingTop="70px">
          <AppRouter />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
