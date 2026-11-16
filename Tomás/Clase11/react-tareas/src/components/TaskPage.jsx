import { useState } from "react";
import TaskHeader from "./TaskHeader";
import Footer from "./Footer";
import TaskList from "./TaskList";
import Panel from "./Panel";
import TaskSummary from "./TaskSummary";
import TaskItem from "./TaskItem";
import "./TaskPage.css";

export default function TaskPage({ initialTasks, titulo, subtitulo, conAyuda }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [hideCompleted, setHideCompleted] = useState(false);

  function handleToggle(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function handleToggleHide() {
    setHideCompleted(!hideCompleted);
  }

  const visibleTasks = hideCompleted
    ? tasks.filter((t) => !t.completed)
    : tasks;

  // Filtrados
  const pendientes = tasks.filter((t) => !t.completed);
  const hechas = tasks.filter((t) => t.completed);

  // Ordenamientos (toSorted no modifica tasks)
  const porTitulo = tasks.toSorted((a, b) => a.title.localeCompare(b.title));
  const pendientesPrimero = tasks.toSorted((a, b) => a.completed - b.completed);

  const destacada = tasks.find((t) => !t.completed);

  return (
    <div className="pagina">
      <TaskHeader title={titulo} subtitle={subtitulo} />

      <div className="task-page__grid">
        <div className="task-page__lists">
          <Panel title="Tarea destacada">
            {destacada ? (
              <TaskItem task={destacada} variant="compact" onToggle={handleToggle} />
            ) : (
              <p>No hay tareas pendientes.</p>
            )}
          </Panel>

          <Panel title="Estado actual">
            <TaskSummary tasks={tasks} />
          </Panel>
        </div>

        <div className="task-page__lists">
          <Panel title="Listado de Tareas">
            <button type="button" className="task-page__toggle" onClick={handleToggleHide}>
              {hideCompleted ? "Mostrar completadas" : "Ocultar completadas"}
            </button>

            <TaskList tasks={visibleTasks} onToggle={handleToggle} />
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