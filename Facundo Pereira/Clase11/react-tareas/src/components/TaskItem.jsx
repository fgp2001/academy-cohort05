import "./TaskItem.css";

export default function TaskItem({ task, label = "Tarea" }) {
    return (
        <div className={`task-item ${task.completed ? "task-item--completed" : ""}`}>
            <p className="task-item__title">
                {label}: {task.title}
            </p>

            <span className="task-item__status">{task.completed ? "Hecha" : "Pendiente"}</span>

            <details className="task-item__details">
                <summary>Detalle</summary>
                <p>{task.description || task.title}</p>
            </details>
        </div>
    );
}