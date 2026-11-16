import "./TaskList.css";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
}