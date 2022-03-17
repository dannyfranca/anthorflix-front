import React from "react";
import "./App.css";
import "./i18t";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./config/theme";
import AppRouter from "./routes/AppRouter";
import NavBar from "./components/NavBar";
import SnackbarProvider from "./components/SnackbarProvider";
import Breadcrumbs from "./components/BreadCrumb";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Box paddingTop="70px">
            <Breadcrumbs />
          </Box>
          <AppRouter />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
