export default function TicketCard() {
  // Datos
  const isClosed = false;
  const isUrgent = true;
  const ownerName = "";

  // Reglas
  const ownerLabel = ownerName ? ownerName : "Sin responsable";
  const showWarning = isUrgent && !isClosed;
  const cardClass = isClosed ? "card done" : "card";

  // UI
  return (
    <article className={cardClass}>
      <h2>Revisar la inscripción</h2>
      <p>{isClosed ? "Cerrado" : "Pendiente"}</p>
      <p>{ownerLabel}</p>
      {showWarning && <strong>Necesita atención</strong>}
    </article>
  );
}
