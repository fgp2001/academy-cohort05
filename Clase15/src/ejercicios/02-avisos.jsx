export default function NotificationCard() {
  // Datos
  const notificationCount = 0;
  const showDetails = true;

  // Reglas
  const hasNotifications = notificationCount > 0;
  const summary = hasNotifications ? "Tenés avisos" : "Sin avisos";

  // UI
  return (
    <article className="card">
      <h2>Novedades</h2>
      <p>{summary}</p>
      {showDetails && <p>Revisá la sección de anuncios.</p>}
    </article>
  );
}
