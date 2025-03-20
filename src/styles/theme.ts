import { createTheme, Theme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

// Define theme settings for both light and dark modes
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          // Dark mode
          primary: {
            main: "#0F0F0F",
          },
          background: {
            default: "#0F0F0F",
            paper: "#242424",
          },
          text: {
            primary: "#C3C3C3",
          },
        }
      : {
          // Light mode
          primary: {
            main: "#1976d2",
          },
          background: {
            default: "#f5f5f5",
            paper: "#ffffff",
          },
          text: {
            primary: "#333333",
          },
        }),
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
      styleOverrides: (theme: Theme) => ({
        "*": {
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
        },
        html: {
          fontSize: "62.5%",
        },
        body: {
          backgroundColor: theme.palette.background.default,
          padding: "2rem 5rem",
          lineHeight: "150%",
        },
        "a, a:visited": {
          textDecoration: "none",
          color: theme.palette.text.primary,
          cursor: "pointer",
          "&:hover": {
            color: theme.palette.mode === "light" ? "#000000" : "#FFFFFF",
          },
        },
      }),
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          "& fieldset": {
            borderColor: theme.palette.mode === "light" ? "#757575" : "#C3C3C3",
          },
          "&:hover fieldset": {
            borderColor: theme.palette.mode === "light" ? "#000000" : "#FFFFFF",
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main,
          },
          input: {
            color: theme.palette.mode === "light" ? "#000000" : "#FFFFFF",
            backgroundColor:
              theme.palette.mode === "light" ? "#ffffff" : "#242424",
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.mode === "light" ? "#757575" : "#C3C3C3",
          "&.Mui-focused": {
            color: theme.palette.mode === "light" ? "#000000" : "#FFFFFF",
          },
        }),
      },
    },
  },
});

export const createAppTheme = (mode: PaletteMode) =>
  createTheme(getDesignTokens(mode));
