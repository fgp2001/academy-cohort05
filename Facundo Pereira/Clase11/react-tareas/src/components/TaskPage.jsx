import TaskHeader from "./TaskHeader"
import "./TaskPage.css"
import Panel from "./Panel"
import TaskList from "./TaskList";
import TaskSummary from "./TaskSummary"

export default function TaskPage({ tasks, titulo, conAyuda }) {
    //Filtrado de tareas segun estado:
    const pendientes = tasks.filter((task) => !task.completed);
    const completadas = tasks.filter((task) => task.completed);

    //Ordenar alfabeticamente por titulo sin modificar el array original
    const porTitulo = [...tasks].sort((a, b) => a.title.localeCompare(b.title));

    //Mostrar primero las pendientes
    const pendientesPrimero = [...tasks].sort(
        (a, b) => Number(a.completed) - Number(b.completed));

    return (
        <main className="task-page">
            <TaskHeader title={titulo} subtitle="" />

            <div className="task-page-layout">
                <Panel title="Todas las tareas">
                    <TaskList tasks={tasks} />
                </Panel>

                <Panel title="Resumen">
                    <TaskSummary tasks={tasks} />
                </Panel>
            </div>
        </main>
    );
}