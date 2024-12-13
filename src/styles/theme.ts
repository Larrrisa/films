import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0F0F0F",
    },
    background: {
      default: "#0F0F0F",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontSize: 36,
    },
    h2: {
      fontSize: 28,
    },
    h3: {
      fontSize: 20,
    },
    body1: {
      fontSize: 16,
    },
    button: {
      fontSize: 16,
    },
  },
});
