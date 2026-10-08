// Necesita servidor-pruebas.js corriendo (la ruta /lento tarda 10 segundos)
const http = require('node:http');

const req = http.get('http://localhost:3000/lento', (res) => {
  res.setEncoding('utf8');
  res.on('data', (parte) => console.log('Respuesta:', parte));
});

// Si en 5 segundos no hay actividad, cortamos nosotros
req.setTimeout(5000, () => {
  console.log('Pasaron 5 segundos sin respuesta, cancelo...');
  req.destroy(new Error('Tardó más de 5 segundos'));
});

req.on('error', (e) => console.error('Error:', e.message));
