
export const tasks = [
    { id: 1, title: "Esta es una tarea con un título extremadamente largo para comprobar cómo se comporta nuestro diseño cuando el contenido supera el espacio disponible", completed: false },
    { id: 2, title: "Preparar el PR", completed: true },
    { id: 3, title: "Salir a correr", completed: false },
    { id: 4, title: "Leer sobre props", completed: true },
    { id: 5, title: "Hacer las compras", completed: false },
    { id: 6, title: "Practicar JavaScript", completed: false },
    { id: 7, title: "Ordenar el escritorio", completed: true },
    { id: 8, title: "Repasar arrays", completed: false }
];


export const arrayTasks = Array.from(
    { length: 20 },
    (_, i) => ({
        id: i + 1,
        title: `Tarea ${i + 1}`,
        completed: i % 3 === 0
    })
);