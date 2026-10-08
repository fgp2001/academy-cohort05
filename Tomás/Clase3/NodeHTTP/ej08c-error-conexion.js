// No necesita servidor: probamos qué pasa si no hay nadie escuchando
const http = require('node:http');

const req = http.get('http://localhost:3999/', (res) => {
  res.resume();
});

req.on('error', (e) => {
  console.error('No se pudo conectar. Código:', e.code);
});
