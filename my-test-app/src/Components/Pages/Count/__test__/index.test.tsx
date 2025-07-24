import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Count from "../index";
import { fireEvent, render, screen } from "@testing-library/react";



describe("Count Component", () => {
    beforeEach(() => {});

    afterEach(() => {});

    it("matches snapshot", () => {
        const { container } = render(<Count />);
        expect(container).toMatchSnapshot();
    });

    it("should render the component", () => {
        expect(Count).toBeDefined();
    });

    it("should have a headline", () => {
        render(<Count />);
        const heading = screen.getByText("Count Component");
        expect(heading).toBeInTheDocument();
    });

    it("should have an add Button", () => {
        render(<Count />);
        const addButton = screen.getByTestId("increase-count-button");
        expect(addButton).toBeInTheDocument();
    });

    it("should increase count when add button is clicked", () => {
        render(<Count />);
        const addButton = screen.getByTestId("increase-count-button");
        // Assuming the count is displayed in an element with test id 'count-value'
        const countValue = screen.getByTestId("count-value");
        const initialValue = Number(countValue.textContent);
        fireEvent.click(addButton);
        expect(Number(countValue.textContent)).toBe(initialValue + 1);
    });

    // Additional tests can be added here to check functionality, state changes, etc.
});
