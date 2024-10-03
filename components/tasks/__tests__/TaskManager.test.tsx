import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskManager from "../TaskManager";

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("TaskManager Component", () => {
  beforeEach(() => {
    localStorage.clear();
    render(<TaskManager />);
  });

  it("should render the task manager", () => {
    expect(screen.getByText("Task Manager")).toBeInTheDocument();
  });

  it("should allow adding tasks", async () => {
    const input = await screen.findByPlaceholderText("Enter a new task");
    const addButton = screen.getByText("Add Task");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);
    await waitFor(() => {
      expect(screen.getByText("New Task")).toBeInTheDocument();
    });
  });

  it("should delete a task", async () => {
    const input = await screen.findByPlaceholderText("Enter a new task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Task to Delete" } });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText("Task to Delete")).toBeInTheDocument();
    });

    const deleteButtons = await screen.findAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    await waitFor(
      () => {
        expect(screen.queryByText("Task to Delete")).not.toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });
});
