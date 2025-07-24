import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Products from "../index";

// Mock fetch or axios if your Products component fetches data
beforeEach(() => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          products: [
            {
              id: 1,
              title: "Product A",
              description: "Description A",
              price: 100,
              category: "Category A",
              brand: "Brand A",
            },
            {
              id: 2,
              title: "Product B",
              description: "Description B",
              price: 200,
              category: "Category B",
              brand: "Brand B",
            },
          ],
        }),
    })
  ) as unknown as typeof fetch;
});

afterEach(() => {
  vi.resetAllMocks();
});

describe("Products Component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Products />);
    expect(container).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    render(<Products />);
    expect(Products).toBeDefined();
  });

  it("should display the headline", () => {
    render(<Products />);
    const heading = screen.getByText("Products");
    expect(heading).toBeInTheDocument();
  });

  it("should render products from API", async () => {
    render(<Products />);
    expect(await screen.findByText("Product A")).toBeInTheDocument();
    expect(await screen.findByText("Product B")).toBeInTheDocument();
  });
});
