const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]

function contarOvejas(ovejas) {
  return ovejas
    .filter( ({color}) => color === "rojo" )
    .filter( ({name}) => name.toUpperCase().includes("N"))
    .filter( ({name}) => name.toUpperCase().includes("A"))
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)