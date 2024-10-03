// TaskTablePage.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import TaskTablePage from "../table/page";

describe("TaskTablePage Responsiveness", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test("shows medium screen text on medium screens", () => {
    window.innerWidth = 768;
    window.dispatchEvent(new Event("resize"));

    render(<TaskTablePage />);

    expect(screen.getByText(/medium screen/i)).toBeInTheDocument();
  });
  test("shows small screen text on small screens", () => {
    window.innerWidth = 400;
    window.dispatchEvent(new Event("resize"));

    render(<TaskTablePage />);

    expect(screen.getByText(/small screen/i)).toBeInTheDocument();
  });

  test("shows clear tasks button on large screens", () => {
    // Set up the viewport for large screens
    window.innerWidth = 1024; // Large screen width
    window.dispatchEvent(new Event("resize"));

    const tasks = [
      { id: 1, title: "Test Task 1", completed: false },
      { id: 2, title: "Test Task 2", completed: true },
    ];

    localStorage.setItem("tasks", JSON.stringify(tasks));
    render(<TaskTablePage />);
    const button = screen.getByRole("button", { name: /clear tasks/i });
    expect(button).toBeInTheDocument();
    expect(screen.queryByText(/no tasks available/i)).not.toBeInTheDocument();

    // Simulate clearing tasks
    fireEvent.click(button);
    expect(screen.getByText(/no tasks available/i)).toBeInTheDocument();
  });
});
