import TaskManager from "@/components/tasks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task Manager",
};

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <TaskManager />
    </div>
  );
}
