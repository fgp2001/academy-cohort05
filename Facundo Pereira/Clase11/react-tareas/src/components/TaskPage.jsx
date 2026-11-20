import TaskHeader from "./TaskHeader"
import "./TaskPage.css"
import Panel from "./Panel"
import TaskList from "./TaskList";
import TaskSummary from "./TaskSummary"
import { useState, useEffect } from "react";
import useTasks from "../hooks/useTask.js";

export default function TaskPage({ titulo, conAyuda }) {

    const { tasks, loading, error, toggleTask, reload } = useTasks();
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [seconds, setSeconds] = useState(0);


    const pending = tasks.filter((task) => !task.completed).length;

    const filteredTasks = tasks.filter((task) => {
        const matchesFilter = filter === "all" || (filter === "pending" && !task.completed) || (filter === "done" && task.completed);
        const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());

        return matchesFilter && matchesSearch;
    })

    useEffect(() => {
        document.title = `${pending} pendientes · Tareas`;
    }, [pending]);

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000)


        return () => clearInterval(id);

    }, []);
    let content;

    if (loading) {
        content = <p role="status">Cargando tareas…</p>;
    } else if (error) {
        content = (
            <div>
                <p role="alert">
                    No pudimos cargar las tareas.
                </p>
                <button type="button" onClick={reload}>
                    Reintentar
                </button>
            </div>
        );
    } else if (tasks.length === 0) {
        content = <p>Todavía no hay tareas.</p>;
    } else {
        content = (
            <>
                <div className="task-filters">
                    <button
                        type="button"
                        onClick={() => setFilter("all")}
                        aria-pressed={filter === "all"}
                    >
                        Todas
                    </button>

                    <button
                        type="button"
                        onClick={() => setFilter("pending")}
                        aria-pressed={filter === "pending"}
                    >
                        Pendientes
                    </button>

                    <button
                        type="button"
                        onClick={() => setFilter("done")}
                        aria-pressed={filter === "done"}
                    >
                        Completadas
                    </button>
                </div>

                <div className="task-search">
                    <label htmlFor="task-search">
                        Buscar tareas
                    </label>

                    <input
                        id="task-search"
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar por título..."
                    />
                </div>

                <p aria-live="polite">
                    Mostrando {filteredTasks.length} de {tasks.length} tareas
                </p>

                {filteredTasks.length === 0 ? (
                    <p>No se encontraron tareas con esos filtros.</p>
                ) : (
                    <TaskList
                        tasks={filteredTasks}
                        onToggleTask={toggleTask}
                    />
                )}
            </>
        );
    }

    return (
        <main className="task-page">
            <TaskHeader title={titulo} subtitle={`Actualizado hace ${seconds} s`} />

            <div className="task-page-layout">
                <Panel title="Todas las tareas">
                    {content}
                </Panel>

                <Panel title="Resumen">
                    <TaskSummary tasks={tasks} />
                </Panel>
            </div>
        </main>
    );
}