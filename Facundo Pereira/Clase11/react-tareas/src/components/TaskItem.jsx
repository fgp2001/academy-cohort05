import styles from "./TaskItem.module.css";

export default function TaskItem({ task, label = "Tarea", variant = "default"
}) {
    return (
        <div className={`${styles["task-item"]} ${task.completed ? styles["task-item--completed"] : ""} ${variant === "compact" ? styles.compact : ""}`}>
            <p className={styles["task-item__title"]}>
                {label}: {task.title}
            </p>

            <span className={styles["task-item__status"]}>{task.completed ? "Hecha" : "Pendiente"}</span>

            <details className={styles["task-item__details"]}>
                <summary>Detalle</summary>
                <p>{task.description || task.title}</p>
            </details>
        </div>
    );
}