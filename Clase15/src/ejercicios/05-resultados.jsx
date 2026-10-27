export default function ResultsPanel() {
  // Datos
  const isLoading = false;
  const hasError = true;
  const resultCount = 0;

  // Casos con prioridad
  if (isLoading) return <section className="card"><h2>Cargando</h2></section>;
  if (hasError) return <section className="card"><h2>Error al cargar</h2></section>;

  // UI del caso normal
  return (
    <section className="card">
      <h2>Resultados</h2>
      <p>{resultCount > 0 ? `Encontramos ${resultCount}` : "Sin resultados"}</p>
    </section>
  );
}
