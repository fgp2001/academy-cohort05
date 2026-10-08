// Necesita: node servidor-pruebas.js 4000   (en otra terminal, puerto 4000)
// Funciona en cualquier versión de Node.
const http = require('node:http');

const server = http.createServer(async (req, res) => {
  const controller = new AbortController();

  // 'close' se dispara cuando la conexión se cierra.
  // Si todavía no terminamos de responder, es porque el cliente se fue.
  res.on('close', () => {
    if (!res.writableFinished) {
      console.log('El cliente se fue: cancelo el trabajo pendiente');
      controller.abort();
    }
  });

  try {
    console.log('Pidiendo datos a otro servidor (tarda 10 s)...');
    const respuesta = await fetch('http://localhost:4000/lento', { signal: controller.signal });
    res.end(await respuesta.text());
  } catch (err) {
    if (err.name === 'AbortError') return; // cancelado a propósito, no es un error real
    res.statusCode = 500;
    res.end('Error interno');
  }
});

server.listen(3000, () => console.log('http://localhost:3000'));
