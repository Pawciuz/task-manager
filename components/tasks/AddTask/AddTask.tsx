import { Button, Input } from "@/components/ui";
import { useState } from "react";

interface AddTaskProps {
  onAddTask: (title: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="flex mb-4">
      <Input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        className="flex-grow border rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <Button
        onClick={handleAddTask}
        className="bg-indigo-500 ml-2 text-white px-4 rounded-r-md hover:bg-indigo-600 transition"
      >
        Add Task
      </Button>
    </div>
  );
};

export default AddTask;
