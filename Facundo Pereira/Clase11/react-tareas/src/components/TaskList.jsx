import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks, onToggleTask }) {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleTask={onToggleTask}
                />
            ))}
        </div>
    );
}