// 1. Array de ovejas
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
];

// 2. Funcion que filtra las ovejas rojas y que en su nombre tengan la letra "n" y "a"
function contarOvejas(ovejas) {
  return ovejas
    .filter( ({color}) => color === "rojo" )
    .filter( ({name}) => /n/gi.test(name) && /a/gi.test(name) );
}

// 3. Ejecutamos la funcion y mostramos en consola el resultado
const ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);