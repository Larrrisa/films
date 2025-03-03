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
      primary: "#C3C3C3",
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
        },
        html: {
          fontSize: "62.5%",
        },
        body: {
          backgroundColor: "#0F0F0F",
          padding: "2rem 5rem",
        },
        "a, a:visited": {
          textDecoration: "none",
          color: "#C3C3C3",
          cursor: "pointer",
          "&:hover": {
            color: "#FFFFFF",
          },
        },
      },
    },
  },
});
