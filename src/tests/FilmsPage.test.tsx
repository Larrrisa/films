import { render, screen, waitFor } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { afterEach, describe, expect, it, vi } from "vitest";

import { FilmsPage } from "../pages/filmsPage/FilmsPage";
import * as filmsApi from "../store/api";
import {
  mockUseGetFilmsQueryLoading,
  mockUseGetFilmsQuerySuccess,
} from "./mocks/filmsApiMock";

describe("FilmsPage", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("shows skeleton when loading", () => {
    mockUseGetFilmsQueryLoading();
    const Stub = createRoutesStub([
      {
        path: "/films",
        Component: FilmsPage,
      },
    ]);

    render(<Stub initialEntries={["/films"]} />);
    expect(screen.getAllByTestId("content-skeleton")).toHaveLength(12);
  });

  it("renders heading and films", async () => {
    mockUseGetFilmsQuerySuccess();
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
