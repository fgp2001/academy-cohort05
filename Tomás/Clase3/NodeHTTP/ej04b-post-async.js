const http = require('node:http');

// Función reutilizable: lee todo el cuerpo y lo convierte de JSON a objeto
async function leerJSON(req) {
  const partes = [];
  for await (const parte of req) partes.push(parte);
  return JSON.parse(Buffer.concat(partes).toString('utf8'));
}

const server = http.createServer(async (req, res) => {
  try {
    const datos = await leerJSON(req);
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Hola ${datos.nombre}`);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('JSON inválido');
  }
});

server.listen(3000, () => {
  console.log('Esperando POST en http://localhost:3000');
});
