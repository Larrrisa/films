import { render, screen, waitFor } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { FilmsPage } from "../pages/filmsPage/FilmsPage";
import * as filmsApi from "../store/api";
import { mockUseGetFilmsQuery } from "./mocks/filmsApiMock";

describe("FilmsPage", () => {
  beforeEach(() => {
    mockUseGetFilmsQuery();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("renders heading and films", async () => {
    const Stub = createRoutesStub([
      {
        path: "/films",
        Component: FilmsPage,
      },
    ]);

    render(<Stub initialEntries={["/films"]} />);

    expect(filmsApi.useGetFilmsQuery).toHaveBeenCalledWith(1);

    expect(screen.getByRole("heading", { name: /Films/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Mock Film 1")).toBeInTheDocument();
      expect(screen.getByText("Mock Film 2")).toBeInTheDocument();
    });

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
