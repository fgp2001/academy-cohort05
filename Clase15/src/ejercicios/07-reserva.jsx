export default function BookingSummary() {
  // Datos
  const isCancelled = false;
  const isLoading = false;
  const ticketCount = 2;
  const unitPrice = 50;
  const hasDiscount = true;

  // Casos con prioridad
  if (isCancelled) return <h2>Reserva cancelada</h2>;
  if (isLoading) return <h2>Calculando total</h2>;
  if (ticketCount === 0) return null;

  // Reglas del caso normal
  const subtotal = ticketCount * unitPrice;
  const discount = hasDiscount ? 20 : 0;
  const total = subtotal - discount;
  const cardClass = hasDiscount ? "card discounted" : "card";

  // UI
  return (
    <section className={cardClass}>
      <h2>Resumen de reserva</h2>
      <p>Entradas: {ticketCount}</p>
      {hasDiscount && <p>Antes: <del>${subtotal}</del></p>}
      <p>Total: ${total}</p>
    </section>
  );
}
