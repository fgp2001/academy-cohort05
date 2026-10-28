import "./TaskItem.css"

export default function TaskItem({task, label = "Tarea"}) {
    return (
        <div>
            <p className="task-item__title">{label}: {task.title}</p>
        </div>
    );
}