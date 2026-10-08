// Necesita servidor-pruebas.js corriendo en otra terminal
const http = require('node:http');

// Se puede pasar la URL directamente y las opciones aparte
const req = http.request('http://localhost:3000/productos', { method: 'DELETE' }, (res) => {
  console.log('Código de estado:', res.statusCode); // 204 = borrado, sin contenido
  res.resume();
});

req.on('error', (e) => console.error('Problema:', e.message));
req.end();
