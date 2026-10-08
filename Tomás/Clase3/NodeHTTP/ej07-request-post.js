// Necesita servidor-pruebas.js corriendo en otra terminal
const http = require('node:http');

const datos = JSON.stringify({ nombre: 'Gorra', precio: 3200 });

const req = http.request({
  hostname: 'localhost',
  port: 3000,
  path: '/productos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(datos),
  },
}, (res) => {
  console.log('Código de estado:', res.statusCode);
  res.setEncoding('utf8');
  res.on('data', (parte) => console.log('Cuerpo:', parte));
  res.on('end', () => console.log('Fin de la respuesta'));
});

req.on('error', (e) => console.error('Problema:', e.message));

req.write(datos); // mandamos el cuerpo
req.end();        // obligatorio: sin esto la petición nunca sale
