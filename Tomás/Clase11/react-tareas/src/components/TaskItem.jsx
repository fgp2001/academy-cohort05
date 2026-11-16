import { useState } from "react";
import styles from "./TaskItem.module.css";

export default function TaskItem({ task, variant = "default" }) {

  const [completed, setCompleted] = useState(task.completed);

  function handleToggleCompleted() {
    setCompleted(!completed);
  }
  
  const className = [
    styles.item,
    completed && styles.completed,
    variant === "compact" && styles.compact
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className={styles.row}>
        <span className={styles.title}>{task.title}</span>
        <span className={styles.status}>{completed ? "Completada" : "Pendiente"}</span>
        <button type="button" className={styles.button} onClick={handleToggleCompleted}>
          {completed ? "Marcar como pendiente" : "Marcar como completada"}
        </button>
      </div>

      {task.description && (
        <details className={styles.details}>
          <summary>Ver descripción</summary>
          <p>{task.description}</p>
        </details>
      )}
    </div>
  );
}