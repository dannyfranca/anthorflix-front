import { createTheme, PaletteOptions } from "@mui/material";
import { green, red } from "@mui/material/colors";

const palette: PaletteOptions = {
  primary: {
    main: "#2E9D9F",
    contrastText: "#fff",
  },
  secondary: {
    main: "#96D536",
    contrastText: "#fff",
  },
  background: {
    default: "#fafafa",
  },
  success: {
    main: green["500"],
    contrastText: "#fff",
  },
  error: {
    main: red["500"],
  },
};

export const theme = createTheme({
  palette,
});
