export default function TaskSummary({ tasks }) {
    const totalCompletas = tasks.reduce(
        (contador, task) => task.completed ? contador + 1 : contador,
        0
    );

    const totalPendientes = tasks.length - totalCompletas;

    const hayPendientes = tasks.some((task) => !task.completed);

    const todasCompletas = tasks.every((task) => task.completed);

    const primeraPendiente = tasks.find((task) => !task.completed);

    const titulos = tasks.map((task) => task.title);

    return (
        <div className="task-summary">
            <p>
                <span>Total de tareas</span>
                <strong>{tasks.length}</strong>
            </p>

            <p>
                <span>Completas</span>
                <strong>{totalCompletas}</strong>
            </p>

            <p>
                <span>Pendientes</span>
                <strong>{totalPendientes}</strong>
            </p>

            <div className="task-summary__divider" />

            <p>
                <span>¿Hay tareas pendientes?</span>
                <strong>{hayPendientes ? "Sí" : "No"}</strong>
            </p>

            <p>
                <span>¿Están todas completas?</span>
                <strong>{todasCompletas ? "Sí" : "No"}</strong>
            </p>

            <div className="task-summary__featured">
                <span>Primera tarea pendiente</span>
                <strong>
                    {primeraPendiente
                        ? primeraPendiente.title
                        : "No hay tareas pendientes"}
                </strong>
            </div>

            <div className="task-summary__titles">
                <span>Títulos de las tareas</span>
                <p>{titulos.join(", ")}</p>
            </div>
        </div>
    );
}