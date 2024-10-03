"use client";
import { Task } from "@/lib/tasks";
import { useState, useEffect } from "react";

const TaskTablePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="max-w-full mx-auto h-full pt-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Task Manager
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 sm:p-3 text-left">
                Task ID
              </th>
              <th className="border border-gray-300 p-2 sm:p-3 text-left">
                Title
              </th>
              <th className="border border-gray-300 p-2 sm:p-3 text-left">
                Completed
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr key={task.id} className="border-b hover:bg-gray-100">
                  <td className="border border-gray-300 p-2 sm:p-3">
                    {task.id}
                  </td>
                  <td className="border border-gray-300 p-2 sm:p-3">
                    {task.title}
                  </td>
                  <td className="border border-gray-300 p-2 sm:p-3">
                    {task.completed ? "Yes" : "No"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="border border-gray-300 p-2 sm:p-3 text-center text-gray-500"
                >
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <div className="hidden lg:block mb-4">
          <button
            onClick={() => {
              localStorage.removeItem("tasks");
              setTasks([]);
            }}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Clear Tasks
          </button>
        </div>

        <div className="hidden md:block lg:hidden mb-4 text-center text-sm text-gray-600">
          Medium Screen
        </div>
        <div className="block md:hidden mb-4 text-center text-sm text-gray-600">
          Small screen
        </div>
      </div>
    </div>
  );
};

export default TaskTablePage;
