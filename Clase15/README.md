# Clase 15 - Leer y entender código

Siete ejercicios independientes, ordenados de menor a mayor dificultad. El objetivo principal es probar tu habilidad individual para entender código: identificar datos, seguir las conditions y explicar qué se renderiza. La velocidad viene de comprender bien las reglas.

El código inicial ya funciona. Cada ejercicio se puede resolver sin completar los anteriores. No hay entrega ni PR.

## Cómo trabajar

1. Leé el archivo individualmente, sin ejecutarlo ni modificarlo.
2. Para cada caso, anotá qué aparece, qué se omite y qué expression o return justifica tu respuesta. Incluí className y disabled cuando corresponda.
3. Explicá en una frase qué hace el component y qué dato podría cambiar la pantalla.
4. Recién después ejecutalo para comprobar tus predicciones. Si hubo una diferencia, identificá qué regla leíste mal.

**La lectura y la explicación son la parte principal. Cada cambio de código es un extra opcional.** Primero completá la lectura de los ejercicios que puedas; después volvé a los extras.

## Inicio

Necesitás Node.js 22.14 o una versión compatible más reciente. Desde la raíz del repo:

```powershell
cd Clase15
npm ci
npm run dev
```

Si recibiste el proyecto como ZIP, ejecutá solo npm ci y npm run dev dentro de la carpeta extraída. Abrí la dirección que muestra la terminal.

El primer ejercicio ya está conectado. Para elegir otro, cambiá solo el import de src/App.jsx:

```jsx
import Exercise from "./ejercicios/02-avisos.jsx";
```

Las pruebas de lectura se resuelven antes de cambiar ese import y abrir la pantalla. Los buttons muestran condiciones y no tienen acciones de click. Cambiá las constants y guardá para comprobar cada caso. Los conteos son enteros mayores o iguales a cero.

## 1. Estado de una tarea - un ternary

Archivo: src/ejercicios/01-estado.jsx.

Anticipá el heading y el paragraph para cada caso.

| done |
| --- |
| false |
| true |

¿Cambia todo el article o solo una parte? ¿Qué texto se mostraría si el paragraph fuera `<p>status</p>`?

Extra opcional: agregá showStatus. Con false se omite solo el paragraph; el heading sigue visible. Con true conserva el comportamiento inicial.

## 2. Avisos - dos condiciones independientes

Archivo: src/ejercicios/02-avisos.jsx.

Anticipá el resumen y si aparece el paragraph de detalle. Explicá por separado de qué dato depende cada uno.

| notificationCount | showDetails |
| --- | --- |
| 0 | true |
| 0 | false |
| 3 | true |
| 3 | false |

¿Puede aparecer el detalle cuando no hay avisos? ¿Aparece un 0 suelto en la pantalla?

Extra opcional: agregá isMuted. Con true se omite el detalle aunque showDetails sea true. El resumen y el heading mantienen sus reglas.

## 3. Ticket - conditions combinadas y fallback

Archivo: src/ejercicios/03-ticket.jsx.

Anticipá estado, responsable, aviso y className del article.

| isClosed | isUrgent | ownerName |
| --- | --- | --- |
| false | true | "" |
| false | false | "Ana" |
| true | true | "Ana" |
| true | false | "" |

¿Por qué un ticket cerrado no muestra el aviso aunque sea urgente? ¿Qué se muestra si ownerName es un string vacío? Señalá qué cambia al cerrar el ticket y qué permanece.

Extra opcional: agregá isArchived. Con true el component devuelve null. Con false conserva su comportamiento. Comprobá un ticket archivado, urgente y sin responsable.

## 4. Inscripción - una regla compartida entre varias partes de la UI

Archivo: src/ejercicios/04-inscripcion.jsx.

Anticipá el texto de cupos, el aviso de cierre, el texto del button, disabled y className del article.

| registrationOpen | seatsLeft |
| --- | --- |
| true | 3 |
| false | 3 |
| true | 0 |
| false | 0 |

¿Por qué registrationOpen=true no alcanza para habilitar el button? ¿Qué partes cambian al pasar de 3 cupos a 0 con la inscripción abierta?

Extra opcional: agregá isSubmitting. Con true, el button queda deshabilitado y dice Enviando..., aunque haya cupos y la inscripción esté abierta. La class available solo aparece cuando realmente se puede inscribir. Los mensajes de cupos y de cierre conservan sus reglas. Con false, conserva el comportamiento inicial.

## 5. Resultados - prioridades y early returns

Archivo: src/ejercicios/05-resultados.jsx.

Anticipá qué heading y qué paragraph aparecen. Incluí los casos en que no aparece ningún paragraph.

| isLoading | hasError | resultCount |
| --- | --- | --- |
| true | true | 4 |
| true | false | 0 |
| false | true | 4 |
| false | false | 4 |
| false | false | 0 |

¿Por qué Cargando gana cuando los dos booleans son true? ¿Se ejecuta el return final después del primer return? ¿En qué casos resultCount no influye en la pantalla?

Extra opcional: agregá isOffline. Con true se muestra solo un section con el h2 Sin conexión. Tiene prioridad sobre loading, error y resultados. Con false, conserva el comportamiento inicial.

## 6. Descarga - acceso, disponibilidad y avisos independientes

Archivo: src/ejercicios/06-descarga.jsx.

Anticipá si el button está habilitado, qué avisos aparecen y si se muestra el contador. Explicá primero canView y después canDownload.

| hasFile | isPrivate | hasAccess | downloadCount |
| --- | --- | --- | --- |
| true | false | false | 0 |
| true | true | false | 0 |
| true | true | true | 3 |
| false | true | true | 3 |
| false | true | false | 0 |

¿Por qué un archivo público puede descargarse con hasAccess=false? ¿Pueden coexistir dos avisos? ¿Por qué no aparece un 0 suelto? El contador es un dato de práctica independiente de la disponibilidad actual.

Extra opcional: agregá isBlocked. Con true se deshabilita la descarga y aparece Archivo bloqueado, aunque el archivo sea público. Los demás avisos y el contador conservan sus reglas. Con false, conserva el comportamiento inicial.

## 7. Reserva - integrar prioridades, null, cálculos y JSX

Archivo: src/ejercicios/07-reserva.jsx.

unitPrice vale 50 y el descuento es un importe fijo de 20 sobre la reserva completa. Para cada caso, anticipá si aparece una pantalla alternativa, nada o el resumen. Si aparece el resumen, indicá cantidad, precio anterior, total y className.

| isCancelled | isLoading | ticketCount | hasDiscount |
| --- | --- | --- | --- |
| true | true | 2 | true |
| false | true | 2 | false |
| false | false | 0 | true |
| false | false | 2 | false |
| false | false | 2 | true |
| true | false | 0 | false |

¿ticketCount=0 siempre significa que no habrá content visible? ¿En qué casos se alcanzan los cálculos? ¿Por qué el precio anterior y la class discounted cambian juntos? Explicá la prioridad completa sin ejecutar.

Extra opcional: agregá isRefunded. Con true se muestra únicamente el h2 Reserva reembolsada y tiene prioridad sobre todos los casos, incluido ticketCount=0. Con false, conserva el comportamiento inicial.

## Comprobar cambios opcionales

```powershell
npm run lint
npm run build
```

Usá nombres claros, conditions separadas y returns fáciles de seguir. No hacen falta nested ternaries, hooks, events, APIs ni arrays. Un build correcto no demuestra que entendiste el comportamiento: compará la pantalla con tus predicciones y justificá las diferencias.
