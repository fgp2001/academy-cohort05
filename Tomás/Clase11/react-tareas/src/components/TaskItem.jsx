import "./TaskItem.css";

export default function TaskItem({ task, label = "Tarea" }) {
  return (
    <>
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {label}: <span className="task-item__title">{task.title}</span>
      </p>
    </>
  );
}