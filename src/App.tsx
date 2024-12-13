import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline>
            <RouterProvider router={router} />
          </CssBaseline>
        </Provider>
      </ThemeProvider>
    </>
  );
}
