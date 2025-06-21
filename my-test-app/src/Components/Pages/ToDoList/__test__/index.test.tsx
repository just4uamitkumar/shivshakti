import { afterEach, beforeEach, describe, expect, it } from "vitest";
import ToDoList from "../index";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ToDoList Component", () => {
  beforeEach(() => {});

  afterEach(() => {});

  it("matches snapshot", () => {
    const { container } = render(<ToDoList />);
    expect(container).toMatchSnapshot();
  });

  it("should render the component", () => {
    expect(ToDoList).toBeDefined();
  });

  it("should have a headline", () => {
    render(<ToDoList />);
    const heading = screen.getByText("To Do List");
    expect(heading).toBeInTheDocument();
  });

  it("should have an input field", () => {
    render(<ToDoList />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should have an input field 2 method", () => {
    render(<ToDoList />);
    const inputField = screen.getByTestId("todo-input");
    expect(inputField).toBeInTheDocument();
  });

  it("should have an add Button", () => {
    render(<ToDoList />);
    const addButton = screen.getByTestId("add-button");
    expect(addButton).toBeInTheDocument();
  });

  it("should add the item from input box", () => {
    render(<ToDoList />);
    const inputField = screen.getByTestId("todo-input");
    fireEvent.change(inputField, { target: { value: "Buy Shoes" } });
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
    const todoItem = screen.getByText("Buy Shoes");
    expect(todoItem).toBeInTheDocument();
  });

  it("should delete the item from the list", () => {
    render(<ToDoList />);
    const inputField = screen.getByTestId("todo-input");
    fireEvent.change(inputField, { target: { value: "Buy Shoes" } });
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);

    const deleteButton = screen.getByTestId("remove-button-0");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Buy Shoes")).not.toBeInTheDocument();
  });

  // Additional tests can be added here to check functionality, state changes, etc.
});
