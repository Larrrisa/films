import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CustomSkeleton from "./CustomSkeleton";

describe("CustomSkeleton", () => {
  it("renders 12 skeletons by default", () => {
    render(<CustomSkeleton />);
    expect(screen.getAllByTestId("content-skeleton")).toHaveLength(12);
  });

  it("renders the specified number of skeletons", () => {
    render(<CustomSkeleton count={5} />);
    expect(screen.getAllByTestId("content-skeleton")).toHaveLength(5);
  });

  it("renders three Skeleton components inside each Stack", () => {
    render(<CustomSkeleton count={1} />);
    const skeletonSpans = screen
      .getByTestId("content-skeleton")
      .querySelectorAll("span");
    expect(skeletonSpans).toHaveLength(3);
  });
});
