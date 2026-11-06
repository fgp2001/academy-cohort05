import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks }) {
    const featuredTask = tasks[0];

    return (
        <div className="task-list">
            {featuredTask && (
                <section>
                    <h2>Tarea destacada</h2>
                    <TaskItem
                        task={featuredTask}
                        label="Destacada"
                        variant="compact"
                    />
                </section>
            )}

            <h2>Lista de tareas</h2>

            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                />
            ))}
        </div>
    );
}