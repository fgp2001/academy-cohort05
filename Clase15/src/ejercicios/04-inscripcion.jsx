export default function CourseCard() {
  // Datos
  const courseName = "React Academy";
  const seatsLeft = 3;
  const registrationOpen = true;

  // Reglas
  const hasSeats = seatsLeft > 0;
  const canRegister = registrationOpen && hasSeats;
  const buttonLabel = canRegister ? "Inscribirme" : "No disponible";
  const cardClass = canRegister ? "card available" : "card";

  // hasSeats = true
  // canRegister = true
  // buttonLabel = Inscribirme
  // cardClass = card available

  // card available
  // React Academy
  // Cupos: 3
  // Boton habilitado -> Inscribirme



  // UI
  return (
    <article className={cardClass}>
      <h2>{courseName}</h2>
      <p>{hasSeats ? `Cupos: ${seatsLeft}` : "Sin cupos"}</p>
      {!registrationOpen && <p>Inscripción cerrada</p>}
      <button type="button" disabled={!canRegister}>{buttonLabel}</button>
    </article>
  );
}
