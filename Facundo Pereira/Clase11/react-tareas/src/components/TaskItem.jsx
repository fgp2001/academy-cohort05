import "./TaskItem.css";

export default function TaskItem({ task, label = "Tarea" }) {
    return (
        <div className={`task-item ${task.completed ? "task-item--completed" : ""}`}>
            <p className="task-item__title">
                {label}: {task.title}
            </p>

            <span>{task.completed ? "Hecha" : "Pendiente"}</span>

            <button type="button">Detalle</button>
        </div>
    );
}