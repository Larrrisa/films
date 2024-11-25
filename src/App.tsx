import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { store } from "./store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
