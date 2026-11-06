import styles from "./TaskItem.module.css";

export default function TaskItem({ task, variant = "default" }) {
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
        <span className={styles.status}>{task.completed ? "Hecha" : "Pendiente"}</span>
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