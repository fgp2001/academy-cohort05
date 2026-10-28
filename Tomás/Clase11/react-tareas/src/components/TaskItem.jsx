import "./TaskItem.css";

export default function TaskItem({ task }) {
  const className = task.completed ? "task-item task-item--completed" : "task-item";

  return (
    <div className={className}>
      <span className="task-item__title">{task.title}</span>
      <span className="task-item__status">{task.completed ? "Hecha" : "Pendiente"}</span>
      <button type="button" className="task-item__button">Detalle</button>
    </div>
  );
}