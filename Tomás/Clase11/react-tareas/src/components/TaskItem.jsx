import "./TaskItem.css";

export default function TaskItem({ task }) {
  const className = task.completed ? "task-item task-item--completed" : "task-item";

  return (
    <div className={className}>
      <div className="task-item__row">
        <span className="task-item__title">{task.title}</span>
        <span className="task-item__status">{task.completed ? "Hecha" : "Pendiente"}</span>
      </div>

      {task.description && (
        <details className="task-item__details">
          <summary>Ver descripción</summary>
          <p>{task.description}</p>
        </details>
      )}
    </div>
  );
}