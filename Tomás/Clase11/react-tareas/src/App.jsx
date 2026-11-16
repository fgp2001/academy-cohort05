import "./App.css";
import PaginaTareas from "./components/TaskPage";
import { tasks as initialTasks } from "./data/tasks";
// import { noTasks as initialTasks } from "./data/tasks"; // sin tareas
// import { arrayTasks as initialTasks } from "./data/tasks"; // array de 20 tareas

export default function App({ titulo = "Mis tareas", subtitulo = "Tomás Fernández", conAyuda = true }) {
  return (
    <PaginaTareas initialTasks={initialTasks} titulo={titulo} subtitulo={subtitulo} conAyuda={conAyuda} />
  );
}