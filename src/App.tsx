import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B0B0B",
    },

    background: {
      default: "#0B0B0B",
    },
    text: {
      primary: "#C3C3C3",
      secondary: "#797979",
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

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
