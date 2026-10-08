const form = document.querySelector("#form-tarea");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista-tareas");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = input.value.trim();
  if (texto === "") {
    input = focus();
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const btnToggle = document.createElement("button");
  btnToggle.type = "button";
  btnToggle.dataset.action = "toggle";
  btnToggle.textContent = "Hecha";

  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.dataset.action = "delete";
  btnDelete.textContent = "Borrar";

  li.append(span, btnToggle, btnDelete);

  lista.append(li);

  input.value = "";
  input.focus();

});

lista.addEventListener('click', (event) => {
  const boton = event.target.closest('button[data-action]');
  if (!boton) return;

  const li = boton.closest('li');
  const accion = boton.dataset.action;

  if (accion === 'toggle') {
    li.classList.toggle('hecha');
  }

  if (accion === 'delete') {
    li.remove();
  }
});