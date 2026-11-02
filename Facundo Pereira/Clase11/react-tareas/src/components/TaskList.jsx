import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks }) {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                />
            ))}
        </div>
    );
}
