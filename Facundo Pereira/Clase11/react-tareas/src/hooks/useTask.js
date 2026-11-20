import { useState, useEffect } from "react";
import { getTasks } from "../api.js";

export default function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function loadTasks() {
            setLoading(true);
            setError(null);

            try {
                const data = await getTasks(controller.signal);
                setTasks(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        loadTasks();

        return () => controller.abort();
    }, [reloadKey]);

    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const reload = () => {
        setReloadKey((prev) => prev + 1);
    };

    return {
        tasks,
        loading,
        error,
        toggleTask,
        reload
    };
}