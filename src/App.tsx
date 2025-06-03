import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

import { router } from "./routes/router";
import { ThemeProvider } from "./shared/context/ThemeProvider";
import { store } from "./store/store";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <CssBaseline />
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
