// Necesita servidor-pruebas.js corriendo en otra terminal
const http = require('node:http');

http.get('http://localhost:3000/productos', (res) => {
  const { statusCode } = res;
  const tipo = res.headers['content-type'];

  // Si no es un 200 con JSON, descartamos la respuesta
  if (statusCode !== 200 || !/^application\/json/.test(tipo)) {
    console.error(`Error: status ${statusCode}, tipo ${tipo}`);
    res.resume(); // descarta los datos para liberar memoria
    return;
  }

  // Juntamos los pedazos de texto que van llegando
  res.setEncoding('utf8');
  let datos = '';
  res.on('data', (parte) => { datos += parte; });

  // Cuando terminó, convertimos el texto a objeto
  res.on('end', () => {
    try {
      console.log('Productos:', JSON.parse(datos));
    } catch (e) {
      console.error('No es JSON válido:', e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Falló la petición: ${e.message}`);
});
