import TaskHeader from "./TaskHeader";
import Footer from "./Footer";
import TaskList from "./TaskList";
import Panel from "./Panel";
import TaskSummary from "./TaskSummary";
import "./TaskPage.css";

export default function TaskPage({ tasks, titulo, subtitulo, conAyuda }) {
  // Filtrados
  const pendientes = tasks.filter((t) => !t.completed);
  const hechas = tasks.filter((t) => t.completed);

  // Ordenamientos (toSorted no modifica tasks)
  const porTitulo = tasks.toSorted((a, b) => a.title.localeCompare(b.title));
  const pendientesPrimero = tasks.toSorted((a, b) => a.completed - b.completed);

  return (
    <div className="pagina">
      <TaskHeader title={titulo} subtitle={subtitulo} />

      <div className="task-page__grid">
        <Panel title="Estado actual">
          <TaskSummary tasks={tasks} />
        </Panel>

        <div className="task-page__lists">
          <Panel title="Listado de Tareas">
            <TaskList tasks={tasks} />
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