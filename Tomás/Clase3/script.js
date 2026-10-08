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
  li.append(span);

  lista.append(li);

  input.value = "";
  input.focus();

});