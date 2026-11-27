import { useState, useRef, useId } from "react";
import styles from "./NewTaskForm.module.css";

export default function NewTaskForm({
  onSave,
  onCancel,
  initialTitle = "",
  initialDescription = "",
}) {
  const isEdit = Boolean(onCancel);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const id = useId();

  function handleSubmit(e) {
    e.preventDefault();

    const clean = title.trim();
    if (!clean) {
      setError("Escribí un título para la tarea.");
      inputRef.current.focus();
      return;
    }

    onSave({ title: clean, description: description.trim() });

    if (!isEdit) {
      setTitle("");
      setDescription("");
      setError("");
      inputRef.current.focus();
    }
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
    if (error) setError("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label htmlFor={`${id}-title`} className={styles.label}>Título</label>
      <input
        id={`${id}-title`}
        ref={inputRef}
        autoFocus={isEdit}
        className={styles.field}
        value={title}
        onChange={handleTitleChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && <p id={`${id}-error`} className={styles.error}>{error}</p>}

      <label htmlFor={`${id}-description`} className={styles.label}>Descripción (opcional)</label>
      <textarea
        id={`${id}-description`}
        className={styles.field}
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className={styles.actions}>
        <button type="submit" className={styles.button}>
          {isEdit ? "Guardar cambios" : "Agregar tarea"}
        </button>
        {isEdit && (
          <button type="button" className={styles.button} onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}