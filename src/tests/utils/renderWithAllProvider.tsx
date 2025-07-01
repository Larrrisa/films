import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";

import { store } from "../../store/store";

interface Options {
  route?: string;
  routerProps?: MemoryRouterProps;
}

export function renderWithAllProviders(
  ui: ReactElement,
  { route = "/", routerProps }: Options = {}
) {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]} {...routerProps}>
        {ui}
      </MemoryRouter>
    </Provider>
  );
}
