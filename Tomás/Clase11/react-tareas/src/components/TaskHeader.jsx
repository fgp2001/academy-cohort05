import "./TaskHeader.css";

//let renders = 0;

export default function TaskHeader({ title, subtitle }) {
  let renders = 0;
  renders++;
  return (
    <>
      <h1 className="task-header__title">{title} (render #{renders})</h1>
      <h2>{subtitle} (render #{renders + 1})</h2>
    </>
  );
}

// Veo el número 2, no 1: StrictMode hace que React ejecute el componente dos veces, y como "renders" está fuera de la función no se reinicia, así que suma 1 en cada ejecución.

//Para solucionarlo, se debe poner la variable adentro de la función.

// Con React DevTools ("Highlight updates when components render") se ve que TaskHeader se marca en cada mostrar(), aunque el título no cambie. Que un componente se ejecute no significa que React cambie el DOM.