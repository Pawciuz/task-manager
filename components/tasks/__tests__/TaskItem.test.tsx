import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskItem from "@/components/tasks/TaskItem";

const task = { id: 1, title: "Test Task", completed: false };

describe("TaskItem Component", () => {
  test("should render task item", () => {
    render(
      <TaskItem task={task} onDeleteTask={() => {}} onToggleTask={() => {}} />,
    );

    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Complete")).toBeInTheDocument();
  });

  test("should call onToggleTask when Complete is clicked", () => {
    const mockToggleTask = jest.fn();
    render(
      <TaskItem
        task={task}
        onDeleteTask={() => {}}
        onToggleTask={mockToggleTask}
      />,
    );

    const completeButton = screen.getByText("Complete");
    fireEvent.click(completeButton);

    expect(mockToggleTask).toHaveBeenCalledWith(task.id);
  });

  test("should call onDeleteTask when Delete is clicked", () => {
    const mockDeleteTask = jest.fn();
    render(
      <TaskItem
        task={task}
        onDeleteTask={mockDeleteTask}
        onToggleTask={() => {}}
      />,
    );

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(mockDeleteTask).toHaveBeenCalledWith(task.id);
  });
});
