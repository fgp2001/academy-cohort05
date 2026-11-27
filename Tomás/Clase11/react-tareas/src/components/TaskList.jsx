import "./TaskList.css";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onEdit }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} />
      ))}
    </div>
  );
}