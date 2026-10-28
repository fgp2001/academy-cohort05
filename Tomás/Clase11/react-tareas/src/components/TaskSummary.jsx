import "./TaskSummary.css";

export default function TaskSummary({ tasks }) {
  const total = tasks.length;
  const hechas = tasks.filter((t) => t.completed).length;

  // reduce: otra forma de contar las hechas
  const hechasConReduce = tasks.reduce((acc, t) => (t.completed ? acc + 1 : acc), 0);

  // some / every: preguntas de sí o no sobre todo el array
  const hayPendientes = tasks.some((t) => !t.completed);
  const todasHechas = tasks.every((t) => t.completed);

  // find: la primera tarea que cumple la condición
  const proxima = tasks.find((t) => !t.completed);

  // map: un array nuevo con solo los títulos
  const titulos = tasks.map((t) => t.title).join(", ");

  return (
    <div className="task-summary">
      <p>{hechas} hechas de {total} tareas</p>
      <p>Con reduce: {hechasConReduce} hechas</p>
      <p>¿Hay pendientes? {hayPendientes ? "Sí" : "No"}</p>
      <p>¿Todas hechas? {todasHechas ? "Sí" : "No"}</p>
      <p>Próxima: {proxima ? proxima.title : "Ninguna"}</p>
      <p>Títulos: {titulos}</p>
    </div>
  );
}