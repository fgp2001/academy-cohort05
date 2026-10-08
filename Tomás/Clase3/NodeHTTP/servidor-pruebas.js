// Servidor de pruebas para los ejemplos de cliente (secciones 6 a 9 del documento).
// Ejecutar con: node servidor-pruebas.js   (y dejarlo corriendo en una terminal)
const http = require('node:http');

const productos = [{ id: 1, nombre: 'Taza', precio: 1500 }];

function json(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  console.log(`${new Date().toLocaleTimeString()}  ${req.method} ${req.url}`);

  // GET /productos -> lista
  if (req.method === 'GET' && pathname === '/productos') {
    return json(res, 200, productos);
  }

  // POST /productos -> agrega uno
  if (req.method === 'POST' && pathname === '/productos') {
    const partes = [];
    for await (const chunk of req) partes.push(chunk);
    try {
      const nuevo = JSON.parse(Buffer.concat(partes).toString('utf8'));
      nuevo.id = productos.length + 1;
      productos.push(nuevo);
      return json(res, 201, nuevo);
    } catch {
      return json(res, 400, { error: 'JSON inválido' });
    }
  }

  // DELETE /productos -> borra el último
  if (req.method === 'DELETE' && pathname === '/productos') {
    productos.pop();
    res.writeHead(204);
    return res.end();
  }

  // GET /lento -> tarda 10 segundos (para probar timeouts)
  if (pathname === '/lento') {
    setTimeout(() => res.end('Por fin respondí'), 10000);
    return;
  }

  // GET /datos -> tarda 5 segundos (para probar AbortController)
  if (pathname === '/datos') {
    setTimeout(() => json(res, 200, { ok: true }), 5000);
    return;
  }

  // GET / -> texto simple
  if (pathname === '/') {
    return res.end('Servidor de pruebas funcionando');
  }

  json(res, 404, { error: 'No encontrado' });
});

server.listen(3000, () => {
  console.log('Servidor de pruebas en http://localhost:3000');
  console.log('Rutas: GET/POST/DELETE /productos, GET /lento, GET /datos');
});