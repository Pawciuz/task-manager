import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTask from "@/components/tasks/AddTask";

describe("AddTask Component", () => {
  test("should render input and button", () => {
    render(<AddTask onAddTask={() => {}} />);

    expect(screen.getByPlaceholderText("Enter a new task")).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeInTheDocument();
  });

  test("should call onAddTask when button is clicked", () => {
    const mockAddTask = jest.fn();
    render(<AddTask onAddTask={mockAddTask} />);

    const inputElement = screen.getByPlaceholderText("Enter a new task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(mockAddTask).toHaveBeenCalledWith("New Task");
  });

  test("should clear input after adding task", () => {
    render(<AddTask onAddTask={() => {}} />);

    const inputElement = screen.getByPlaceholderText("Enter a new task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(inputElement, { target: { value: "Task to Clear" } });
    fireEvent.click(addButton);

    expect(inputElement).toHaveValue("");
  });
});
