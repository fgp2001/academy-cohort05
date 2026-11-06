import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks }) {
    const featuredTask = tasks[0];

    return (
        <div className="task-list">
            {featuredTask && (
                <section className="task-list__featured">
                    <h3>Tarea destacada</h3>

                    <TaskItem
                        task={featuredTask}
                        label="Destacada"
                        variant="compact"
                    />
                </section>
            )}

            <section className="task-list__items">
                <h3>Lista de tareas</h3>

                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                ))}
            </section>
        </div>
    );
}