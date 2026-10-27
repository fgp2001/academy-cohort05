export default function TaskStatus() {
  // Datos
  const title = "Practicar JSX";
  const done = false;

  // Regla
  const status = done ? "Completada" : "Pendiente";

  // UI
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{status}</p>
    </article>
  );
}
