const form = document.querySelector("#form-tarea");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista-tareas");
const contador = document.querySelector("#contador");
const filtros = document.querySelector("#filtros");

let tareas = [
  { id: 1, texto: "Cocinar", hecha: true },
  { id: 2, texto: "Estudiar", hecha: true },
  { id: 3, texto: "Cenar", hecha: false },
  { id: 4, texto: "Dormir", hecha: false },
];
let filtro = "todas";

function render() {
  lista.innerHTML = "";

  tareasVisibles().forEach((tarea) => {
    const li = document.createElement("li");
    li.dataset.id = tarea.id;
    if (tarea.hecha) li.classList.add("hecha");

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const btnToggle = document.createElement("button");
    btnToggle.type = "button";
    btnToggle.dataset.action = "toggle";
    btnToggle.textContent = tarea.hecha ? "Deshacer" : "Hecha";

    const btnDelete = document.createElement("button");
    btnDelete.type = "button";
    btnDelete.dataset.action = "delete";
    btnDelete.textContent = "Borrar";

    li.append(span, btnToggle, btnDelete);
    lista.append(li);
  });

  actualizarContador();
}

function tareasVisibles() {
  if (filtro === "pendientes") return tareas.filter((t) => !t.hecha);
  if (filtro === "hechas") return tareas.filter((t) => t.hecha);
  return tareas;
}

function actualizarContador() {
  const pendientes = tareas.filter((t) => !t.hecha).length;
  contador.textContent = `${pendientes} ${pendientes === 1 ? "pendiente" : "pendientes"}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const texto = input.value.trim();
  if (texto === "") {
    input.focus();
    return;
  }

  tareas.push({ id: Date.now(), texto, hecha: false });
  render();

  input.value = "";
  input.focus();
});

lista.addEventListener("click", (event) => {
  const boton = event.target.closest("button[data-action]");
  if (!boton) return;

  const id = Number(boton.closest("li").dataset.id);
  const accion = boton.dataset.action;

  if (accion === "toggle") {
    const tarea = tareas.find((t) => t.id === id);
    tarea.hecha = !tarea.hecha;
  }

  if (accion === "delete") {
    tareas = tareas.filter((t) => t.id !== id);
  }

  render();
});

filtros.addEventListener("click", (event) => {
  const boton = event.target.closest("button[data-filtro]");
  if (!boton) return;

  filtro = boton.dataset.filtro;

  filtros.querySelectorAll("button").forEach((b) => {
    b.setAttribute("aria-pressed", b === boton ? "true" : "false");
  });

  render();
});

render();