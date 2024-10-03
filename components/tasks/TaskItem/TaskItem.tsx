import React from "react";
import { Task } from "@/lib/tasks";
import { Button } from "@/components/ui";

interface TaskItemProps {
  task: Task;
  onDeleteTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDeleteTask,
  onToggleTask,
}) => {
  return (
    <li
      className={`flex justify-between items-center p-2 mb-2 border rounded-lg ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <span className={task.completed ? "line-through" : ""}>{task.title}</span>
      <div className="flex space-x-2">
        <Button
          onClick={() => onToggleTask(task.id)}
          className={`px-2 py-1 rounded-md text-white ${
            task.completed ? "bg-gray-500" : "bg-green-500"
          }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </Button>
        <Button
          onClick={() => onDeleteTask(task.id)}
          className="px-2 py-1 bg-red-500 text-white rounded-md"
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
