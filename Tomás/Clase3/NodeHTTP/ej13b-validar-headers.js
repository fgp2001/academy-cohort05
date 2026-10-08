// No necesita servidor. Funciona en Node 24.
const { validateHeaderName, validateHeaderValue } = require('node:http');

function probarNombre(nombre) {
  try {
    validateHeaderName(nombre);
    console.log(`Nombre "${nombre}": válido`);
  } catch (err) {
    console.log(`Nombre "${nombre}": inválido (${err.code})`);
  }
}

function probarValor(valor) {
  try {
    validateHeaderValue('x-prueba', valor);
    console.log(`Valor ${JSON.stringify(valor)}: válido`);
  } catch (err) {
    console.log(`Valor ${JSON.stringify(valor)}: inválido (${err.code})`);
  }
}

probarNombre('X-Request-Id');
probarNombre('bad header');   // los espacios no están permitidos
probarNombre('');

probarValor('text/html');
probarValor('a\r\nb');        // los saltos de línea no están permitidos
probarValor(undefined);
