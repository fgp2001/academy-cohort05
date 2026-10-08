// Necesita servidor-pruebas.js corriendo (la ruta /datos tarda 5 segundos)
const http = require('node:http');

const controller = new AbortController();

const req = http.get('http://localhost:3000/datos', { signal: controller.signal }, (res) => {
  res.resume();
  res.on('end', () => console.log('Llegó la respuesta'));
});

req.on('error', (e) => {
  if (e.name === 'AbortError') console.log('Petición cancelada');
  else console.error('Error:', e.message);
});

// A los 2 segundos cancelamos (el servidor tarda 5, así que nunca llega)
setTimeout(() => controller.abort(), 2000);
