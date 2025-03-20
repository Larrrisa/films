import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { store } from "./store/store";
import { Provider } from "react-redux";

import { ThemeProvider } from "./shared/context/ThemeProvider";
import { CssBaseline } from "@mui/material";

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
