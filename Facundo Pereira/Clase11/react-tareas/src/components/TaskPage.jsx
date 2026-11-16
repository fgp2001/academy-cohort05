import TaskHeader from "./TaskHeader"
import "./TaskPage.css"
import Panel from "./Panel"
import TaskList from "./TaskList";
import TaskSummary from "./TaskSummary"
import { useState, useEffect } from "react";

export default function TaskPage({ titulo, conAyuda }) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hidePending, setHidePending] = useState(false);
    const pending = tasks.filter((task) => !task.completed).length;
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        document.title = `${pending} pendientes · Tareas`;
    }, [pending]);

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000)


        return () => clearInterval(id);

    }, []);

    useEffect(() => {
        const controller = new AbortController();

        async function loadTasks() {
            try {
                const res = await fetch("/tasks.json", { signal: controller.signal });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                setTasks(await res.json());
            } catch (err) {
                if (err.name !== "AbortError") setError(err);
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        }

        loadTasks();
        return () => controller.abort();
    }, []);

    //Modifica el estado de una tarea
    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            ))
    }

    const handleTogglePending = () => {
        setHidePending((prev) => !prev);
    }

    const visibleTasks = hidePending
        ? tasks.filter((task) => !task.completed)
        : tasks;

    let content;

    if (loading) {
        content = <p role="status">Cargando tareas…</p>;
    } else if (error) {
        content = <p role="alert">No pudimos cargar las tareas.</p>;
    } else if (tasks.length === 0) {
        content = <p>Todavía no hay tareas.</p>;
    } else {
        content = (
            <>
                <button
                    type="button"
                    onClick={handleTogglePending}
                    aria-pressed={hidePending}
                >
                    {hidePending ? "Mostrar todas" : "Ocultar completadas"}
                </button>

                <TaskList tasks={visibleTasks} onToggleTask={toggleTask} />
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