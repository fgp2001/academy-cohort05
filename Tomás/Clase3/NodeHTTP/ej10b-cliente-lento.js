// Necesita ej10a-timeouts-servidor.js corriendo en otra terminal.
// Usa el módulo net (conexión "cruda") para mandar una petición incompleta a propósito.
const net = require('node:net');

const conexion = net.connect(3000, 'localhost', () => {
  // Prometemos 100 bytes de cuerpo pero mandamos solo 3
  conexion.write(
    'POST / HTTP/1.1\r\n' +
    'Host: localhost\r\n' +
    'Content-Length: 100\r\n' +
    '\r\n' +
    'abc'
  );
  console.log('Mandé 3 de los 100 bytes prometidos. Esperando...');
});

conexion.on('data', (d) => console.log('El servidor respondió:\n' + d.toString()));
conexion.on('close', () => console.log('El servidor cerró la conexión'));
