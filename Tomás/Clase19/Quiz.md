1- Si el tasks está vacio, el tasks.lenght da 0, al tener el "&&" devuelve lo de la izquierda, asique devuelve "0".

Se puede corregir poniendo tasks.length > 0 y ahí devuelve False.


2- Estaría rompiendo la regla de inmutabilidad, que un componente tiene que ser puro y no modificar sus props.
El dato se debe cambiar en el componente padre donde están las tareas (data/tasks.js por ejemplo)


3- title recibe el texto "Resumen" y children recibe el elemento TaskSummary tasks={tasks}.


4- Trigger → Render → Commit.

Trigger: algo pide un render (por ejemplo un cambio de estado).
Render: React ejecuta los componentes para calcular que tiene que verse, pero no toca la pantalla.
Commit: React aplica las diferencias al DOM. Solo acá se toca el DOM.


5- El id es de la tarea y no cambia, el índice es la posición y cambia si la lista se reordena o se borra algo. 
Ejemplo: abrís la descripción de la primera tarea y después la lista se ordena A-Z. Con key={index}, la descripción abierta queda en la posición 0, pero ahora en otra tarea.


6- No es puro porque con los mismos props puede devolver un color distinto en cada render aunque no haya cambiado nada.


7- Un problema puede ser el "width: 600px", al ser los px algo fijo, en un celular u otro dispositivo el titulo se puede salir de la pantalla. Se puede corregir borrando ese width y poniendo "min-width: 0" y "flex: 1"

El segundo puede ser el "white-space: nowrap" porque el titulo largo no puede pasar a otra línea, se debe sacar.

Por ultimo, puede ser en :focus el "outline: none", porque no se ve donde está el foco con el teclado, se debe hacer un contorno visible con :focus-visible.


8- Porque con CSS Modules Vite le cambia el nombre a la clase .item por uno único (por ejemplo "_item_x1"), así que "item" escrito a mano no coincide. Se debe usar className={styles.item}.


Demo: hacer una demo explicando toda la tasktitle, que funcion cumple, para que se usaria, que tecnologías usamos, que decisiones tecnicas tome (por que use css modules por ejemplo), que dificultad tuve.