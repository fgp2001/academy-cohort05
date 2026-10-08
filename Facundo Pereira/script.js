const form = document.querySelector("#form");
const input = document.querySelector("#input");
const ul = document.querySelector("#lista");

const tareas = [
    { id: 1, texto: "Aprender JavaScript", completada: false },
    { id: 2, texto: "Practicar DOM", completada: false },
    { id: 3, texto: "Hacer la tarea", completada: false }
];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (input.value.trim() === "") return;

    tareas.push({
        id: Date.now(),
        texto: input.value,
        completada: false
    });

    input.value = "";
    render();
});

ul.addEventListener("click", function (event) {
    const accion = event.target.dataset.action;
    const id = Number(event.target.parentElement.dataset.id);

    if (accion === "delete") {
        const indice = tareas.findIndex(tarea => tarea.id === id);
        tareas.splice(indice, 1);
    }

    if (accion === "toggle") {
        const tarea = tareas.find(tarea => tarea.id === id);
        tarea.completada = !tarea.completada;
    }
    render();
});

function render() {
    ul.replaceChildren();
    tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.dataset.id = tarea.id;

        const texto = document.createElement("span");
        texto.textContent = tarea.texto;

        const completar = document.createElement("button");
        completar.textContent = tarea.completada
            ? "Desmarcar"
            : "Completar";
        completar.dataset.action = "toggle";

        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar";
        eliminar.dataset.action = "delete";

        if (tarea.completada) {
            li.classList.add("completed");
        }

        li.append(texto, completar, eliminar);
        ul.appendChild(li);
    });
}
render();