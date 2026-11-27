import { useState, useEffect } from "react";
import TaskHeader from "./TaskHeader";
import Footer from "./Footer";
import TaskList from "./TaskList";
import Panel from "./Panel";
import TaskSummary from "./TaskSummary";
import TaskItem from "./TaskItem";
import "./TaskPage.css";
import { useTasks } from "../hooks/useTasks";
import NewTaskForm from "./NewTaskForm";

const FILTERS = [
  { value: "all", label: "Todas" },
  { value: "pending", label: "Pendientes" },
  { value: "done", label: "Completadas" },
];

export default function TaskPage({ titulo, subtitulo, conAyuda }) {
  const { tasks, loading, error, reload, toggleTask, addTask, editTask } = useTasks();
  const [seconds, setSeconds] = useState(0);
  const [filter, setFilter] = useState("all"); // "all" | "pending" | "done"
  const [query, setQuery] = useState("");
  const [editingTask, setEditingTask] = useState(null); // null = creando, una tarea = editando

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  function handleToggle(id) {
    toggleTask(id);
    setSeconds(0);
  }

  function handleSave(data) {
    if (editingTask) {
      editTask(editingTask.id, data);
      setEditingTask(null);
    } else {
      addTask(data);
    }
  }

  function clearFilters() {
    setFilter("all");
    setQuery("");
  }

  const q = query.trim().toLowerCase();
  const visibleTasks = tasks
    .filter((t) => filter === "all" || t.completed === (filter === "done"))
    .filter((t) => t.title.toLowerCase().includes(q));

  const pending = tasks.filter((t) => !t.completed).length;

  useEffect(() => {
    document.title = `${pending} pendientes · Tareas`;
  }, [pending]);

  // Filtrados
  const pendientes = tasks.filter((t) => !t.completed);
  const hechas = tasks.filter((t) => t.completed);

  // Ordenamientos (toSorted no modifica tasks)
  const porTitulo = tasks.toSorted((a, b) => a.title.localeCompare(b.title));
  const pendientesPrimero = tasks.toSorted((a, b) => a.completed - b.completed);

  const destacada = tasks.find((t) => !t.completed);

  if (loading) {
    return (
      <div className="pagina">
        <TaskHeader title={titulo} subtitle={subtitulo} />
        <p>Cargando tareas…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pagina">
        <TaskHeader title={titulo} subtitle={subtitulo} />
        <p role="alert">No pudimos cargar las tareas.</p>
        <button type="button" onClick={reload}>
          Reintentar
        </button>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="pagina">
        <TaskHeader title={titulo} subtitle={subtitulo} />
        <p>Todavía no hay tareas.</p>
        <NewTaskForm onSave={addTask} />
      </div>
    );
  }

  return (
    <div className="pagina">
      <TaskHeader title={titulo} subtitle={subtitulo} />

      <div className="task-page__grid">
        <div className="task-page__lists">
          <Panel title="Tarea destacada">
            {destacada ? (
              <TaskItem task={destacada} variant="compact" onToggle={handleToggle} onEdit={setEditingTask} />
            ) : (
              <p>No hay tareas pendientes.</p>
            )}
          </Panel>

          <Panel title="Estado actual">
            <TaskSummary tasks={tasks} />
            <p>Actualizado hace {seconds} s</p>
          </Panel>
        </div>

        <div className="task-page__lists">
          <Panel title={editingTask ? "Editar tarea" : "Nueva tarea"}>
            <NewTaskForm
              key={editingTask ? editingTask.id : "new"}
              initialTitle={editingTask?.title}
              initialDescription={editingTask?.description}
              onSave={handleSave}
              onCancel={editingTask ? () => setEditingTask(null) : undefined}
            />
          </Panel>

          <Panel title="Listado de Tareas">
            <p id="filter-label" className="task-page__label">Mostrar</p>
            <div className="task-page__filters" role="group" aria-labelledby="filter-label">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  className="task-page__filter"
                  aria-pressed={filter === f.value}
                  onClick={() => setFilter(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <p>Mostrando {visibleTasks.length} de {tasks.length}</p>

            <label htmlFor="q" className="task-page__label">Buscar</label>
            <input
              id="q"
              type="search"
              className="task-page__search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {visibleTasks.length === 0 ? (
              <div className="task-page__no-results">
                <p>{query ? `Ninguna tarea coincide con «${query}».` : "No hay tareas con ese filtro."}</p>
                <button type="button" onClick={clearFilters}>Limpiar filtros</button>
              </div>
            ) : (
              <TaskList tasks={visibleTasks} onToggle={handleToggle} onEdit={setEditingTask} />
            )}
          </Panel>
          {/* <Panel title="Pendientes">
            <TaskList tasks={pendientes} />
          </Panel>
          <Panel title="Hechas">
            <TaskList tasks={hechas} />
          </Panel>
          <Panel title="Ordenadas A-Z">
            <TaskList tasks={porTitulo} />
          </Panel>
          <Panel title="Pendientes primero">
            <TaskList tasks={pendientesPrimero} />
          </Panel> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}


//Predicción del ejercicio en Consola:
//
//#0: No se ejecuta TaskHeader, No cambia el DOM.
//#1: Si se ejecuta TaskHeader, Si cambia el DOM.
//#2: Si se ejecuta TaskHeader, No cambia el DOM.
//#3: No se ejecuta TaskHeader, No cambia el DOM.
//#4: Si se ejecuta TaskHeader, Si cambia el DOM.
//#5: Si se ejecuta TaskHeader, Si cambia el DOM.
//
//Resultado: Todo tal cual lo predicho.