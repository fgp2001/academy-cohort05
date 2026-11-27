import styles from "./TaskItem.module.css";

export default function TaskItem({ task, onToggle, onEdit, variant = "default" }) {
  const className = [
    styles.item,
    task.completed && styles.completed,
    variant === "compact" && styles.compact
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className={styles.row}>
        <span className={styles.title}>{task.title}</span>
        <span className={styles.status}>{task.completed ? "Completada" : "Pendiente"}</span>
        <button type="button" className={styles.button} onClick={() => onToggle(task.id)}>
          {task.completed ? "Marcar pendiente" : "Completar"}
        </button>
        <button type="button" className={styles.button} onClick={() => onEdit(task)}>
          Editar
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