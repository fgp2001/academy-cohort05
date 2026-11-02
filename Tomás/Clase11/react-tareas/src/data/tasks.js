export const tasks = [
  { id: 1, title: "Completar los ejercicios", completed: true },
  { id: 2, title: "Hacer PR", description: "Subir la branch feat/estilos y completar la descripción con capturas.", completed: false },
{ id: 3, title: "Review del PR de Facu", description: "Revisar el layout en celular y dejar un comentario.", completed: false },
  { id: 4, title: "Ir al gimnasio", completed: true },
  { id: 5, title: "Estudiar", completed: false },
  { id: 6, title: "Almorzar", completed: true },
  { id: 7, title: "Limpiar la casa", completed: false },
  { id: 8, title: "Revisar toda la documentación de React sobre listas, keys y renderizado condicional antes de la clase del viernes", completed: true },
  { id: 9, title: "Tareaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", completed: false }
];

export const noTasks = [];

export const arrayTasks = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, title: `Tarea ${i + 1}`, completed: i % 3 === 0}));