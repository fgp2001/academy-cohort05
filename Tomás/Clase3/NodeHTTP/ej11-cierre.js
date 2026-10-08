const http = require('node:http');

const server = http.createServer((req, res) => res.end('ok'));

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000 — apretá Ctrl+C para cerrarlo');
});

// SIGINT es la señal que llega al apretar Ctrl+C (en Windows también)
process.on('SIGINT', () => {
  console.log('\nRecibí Ctrl+C, cerrando el servidor...');

  server.close(() => {
    console.log('Servidor cerrado correctamente');
    process.exit(0);
  });

  // Si a los 10 segundos sigue habiendo conexiones abiertas, las cerramos a la fuerza
  setTimeout(() => server.closeAllConnections(), 10000).unref();
});
