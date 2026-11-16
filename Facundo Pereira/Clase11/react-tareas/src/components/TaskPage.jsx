import TaskHeader from "./TaskHeader"
import "./TaskPage.css"
import Panel from "./Panel"
import TaskList from "./TaskList";
import TaskSummary from "./TaskSummary"
import { useState, useEffect } from "react";

export default function TaskPage({ tasks: initialTasks, titulo, conAyuda }) {
    const [tasks, setTasks] = useState(initialTasks);
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

    return (
        <main className="task-page">
            <TaskHeader title={titulo} subtitle={`Actualizado hace ${seconds} s`} />

            <div className="task-page-layout">
                <Panel title="Todas las tareas">
                    <button
                        type="button"
                        onClick={handleTogglePending}
                        aria-pressed={hidePending}
                    >
                        {hidePending
                            ? "Mostrar todas"
                            : "Ocultar completadas"}
                    </button>

                    <TaskList
                        tasks={visibleTasks}
                        onToggleTask={toggleTask}
                    />
                </Panel>

                <Panel title="Resumen">
                    <TaskSummary tasks={tasks} />
                </Panel>
            </div>
        </main>
    );
}