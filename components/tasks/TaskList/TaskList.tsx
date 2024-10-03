import { Task } from "@/lib/tasks";
import TaskItem from "../TaskItem";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDeleteTask,
  onToggleTask,
}) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks added yet</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;
