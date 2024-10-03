"use client";
import { useState, useEffect, useCallback } from "react";
import AddTask from "../AddTask";
import TaskList from "../TaskList";
import { Task } from "@/lib/tasks";

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const updateLocalStorage = useCallback((newTasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }, []);

  const handleAddTask = useCallback(
    (title: string) => {
      const newTask: Task = { id: Date.now(), title, completed: false };
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, newTask];
        updateLocalStorage(updatedTasks);
        return updatedTasks;
      });
    },
    [updateLocalStorage],
  );

  const handleDeleteTask = useCallback(
    (taskId: number) => {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
        updateLocalStorage(updatedTasks);
        return updatedTasks;
      });
    },
    [updateLocalStorage],
  );

  const handleToggleTask = useCallback(
    (taskId: number) => {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task,
        );
        updateLocalStorage(updatedTasks);
        return updatedTasks;
      });
    },
    [updateLocalStorage],
  );

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </div>
  );
};

export default TaskManager;
