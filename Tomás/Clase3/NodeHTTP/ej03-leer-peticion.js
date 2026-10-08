const http = require('node:http');

const server = http.createServer((req, res) => {
  // req.url trae solo la ruta, por ejemplo '/productos?id=5'.
  // new URL() la separa en partes; el segundo dato es una base obligatoria.
  const url = new URL(req.url, 'http://localhost');

  console.log('Método:    ', req.method);
  console.log('Ruta:      ', url.pathname);
  console.log('Parámetro: ', url.searchParams.get('id'));
  console.log('Navegador: ', req.headers['user-agent']);
  console.log('-----');

  res.end('ok');
});

server.listen(3000, () => {
  console.log('Probá: http://localhost:3000/productos?id=5');
});
