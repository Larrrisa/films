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
      fontSize: 56,
    },
    h2: {
      fontSize: 46,
    },
    h3: {
      fontSize: 30,
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
          lineHeight: "150%",
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#C3C3C3",
          },
          "&:hover fieldset": {
            borderColor: "#FFFFFF",
          },
          "&.Mui-focused fieldset": {
            borderColor: "red",
          },
          input: {
            color: "#FFFFFF",
            backgroundColor: "#242424",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#C3C3C3",
          "&.Mui-focused": {
            color: "#FFFFFF",
          },
        },
      },
    },
  },
});
