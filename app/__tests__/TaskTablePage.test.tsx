import { render, screen } from "@testing-library/react";
import TaskTablePage from "../table/page";

beforeEach(() => {
  localStorage.clear();
});

describe("TaskTablePage", () => {
  it("displays the title", () => {
    render(<TaskTablePage />);
    expect(screen.getByText(/Task Manager/i)).toBeInTheDocument();
  });

  it("renders a table with headers", () => {
    render(<TaskTablePage />);

    expect(screen.getByText(/Task ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Completed/i)).toBeInTheDocument();
  });

  it("displays tasks from localStorage", () => {
    const tasks = [
      { id: 1, title: "Test Task 1", completed: false },
      { id: 2, title: "Test Task 2", completed: true },
    ];

    localStorage.setItem("tasks", JSON.stringify(tasks));

    render(<TaskTablePage />);
    expect(screen.getByText(/Test Task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Task 2/i)).toBeInTheDocument();
    expect(screen.getByText(/No/i)).toBeInTheDocument(); // Check for "No" in the completed column for Task 1
    expect(screen.getByText(/Yes/i)).toBeInTheDocument(); // Check for "Yes" in the completed column for Task 2
  });

  it("displays 'No tasks available' when localStorage is empty", () => {
    render(<TaskTablePage />);

    expect(screen.getByText(/No tasks available/i)).toBeInTheDocument();
  });
});
