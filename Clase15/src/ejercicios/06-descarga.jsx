export default function DownloadCard() {
  // Datos
  const hasFile = true;
  const isPrivate = true;
  const hasAccess = false;
  const downloadCount = 0;

  // Reglas
  const canView = isPrivate ? hasAccess : true;
  const canDownload = hasFile && canView;

  // UI
  return (
    <article className="card">
      <h2>Material de la clase</h2>
      {!hasFile && <p>Archivo no disponible</p>}
      {isPrivate && !hasAccess && <p>Acceso restringido</p>}
      {downloadCount > 0 && <p>Descargas: {downloadCount}</p>}
      <button type="button" disabled={!canDownload}>Descargar</button>
    </article>
  );
}
