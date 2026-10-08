// SOLO Node 26.1 o superior: req.signal hace lo mismo que el ejemplo anterior en una línea.
// Necesita: node servidor-pruebas.js 4000
const http = require('node:http');

const server = http.createServer(async (req, res) => {
  try {
    const respuesta = await fetch('http://localhost:4000/lento', { signal: req.signal });
    res.end(await respuesta.text());
  } catch (err) {
    if (err.name === 'AbortError') return;
    res.statusCode = 500;
    res.end('Error interno');
  }
});

server.listen(3000, () => console.log('http://localhost:3000'));
