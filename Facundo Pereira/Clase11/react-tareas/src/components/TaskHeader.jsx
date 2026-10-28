import "./TaskHeader.css"

export default function TaskHeader({ title, subtitle }) {
    return (
        <div>
            <h1 className="task-header__title">{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    );

    //0: No TaskHeader, No cambia DOM.
    //1: Si TaskHeader, Si cambia DOM.
    //2: Si TaskHeader, No cambia DOM.
    //3: No TaskHeader, No cambia DOM.
    //4: Si TaskHeader, Si cambia DOM.
    //5: Si TaskHeader, Si cambia DOM.

    //Se visualiza un numero mayor que 1, se ve 2 ya que la variable esta fuera del componente
    //Cada vez que React ejecuta TaskHeader, se incrementa una variable que ya existia
}