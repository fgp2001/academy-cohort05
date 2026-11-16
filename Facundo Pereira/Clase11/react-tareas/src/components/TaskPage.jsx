import TaskHeader from "./TaskHeader"
import "./TaskPage.css"
import Panel from "./Panel"
import TaskList from "./TaskList";
import TaskSummary from "./TaskSummary"
import { useState } from "react";

export default function TaskPage({ tasks: initialTasks, titulo, conAyuda }) {
    const [tasks, setTasks] = useState(initialTasks);

    const [hidePending, setHidePending] = useState(false);

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
            <TaskHeader title={titulo} subtitle="" />

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