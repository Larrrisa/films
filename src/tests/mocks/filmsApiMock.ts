import { vi } from "vitest";

import * as filmsApi from "../../store/api";

export function mockUseGetFilmsQueryLoading() {
  vi.spyOn(filmsApi, "useGetFilmsQuery").mockImplementation(() => ({
    data: undefined,
    isLoading: true,
    isError: false,
    refetch: vi.fn(),
  }));
}

export function mockUseGetFilmsQuerySuccess(data = defaultData) {
  vi.spyOn(filmsApi, "useGetFilmsQuery").mockImplementation(() => ({
    data,
    isLoading: false,
    isError: false,
    refetch: vi.fn(),
  }));
}

const defaultData = {
  results: [
    { id: 1, title: "Mock Film 1" },
    { id: 2, title: "Mock Film 2" },
  ],
  total_pages: 5,
};
