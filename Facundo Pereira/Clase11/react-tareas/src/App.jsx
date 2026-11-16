import TaskPage from "./components/TaskPage"

export default function App({ titulo = 'Mis tareas', conAyuda = true }) {
  return <TaskPage titulo={titulo} conAyuda={conAyuda} />
};
