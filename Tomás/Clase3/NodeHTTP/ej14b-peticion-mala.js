// Necesita ej14a-client-error.js corriendo en otra terminal
const net = require('node:net');

const conexion = net.connect(3000, 'localhost', () => {
  conexion.write('esto no es HTTP\r\n\r\n');
  console.log('Mandé basura al servidor...');
});

conexion.on('data', (d) => console.log('El servidor respondió:\n' + d.toString()));
