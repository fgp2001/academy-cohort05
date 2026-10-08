const http = require('node:http');

const server = http.createServer((req, res) => {
  // Este servidor solo acepta POST
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Solo acepto POST');
  }

  // El cuerpo llega en partes: las vamos guardando en un array
  const partes = [];
  req.on('data', (parte) => partes.push(parte));

  // Cuando llegó todo, unimos las partes y convertimos el texto a objeto
  req.on('end', () => {
    try {
      const datos = JSON.parse(Buffer.concat(partes).toString('utf8'));
      console.log('Recibí:', datos);
      res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ recibido: datos }));
    } catch {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('JSON inválido');
    }
  });
});

server.listen(3000, () => {
  console.log('Esperando POST en http://localhost:3000');
});
