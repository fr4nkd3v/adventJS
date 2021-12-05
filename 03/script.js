// 1. Función que valida el texto
function isValid(letter) {
  let bool = /\([^\{\}\[\]\s]+\)/g.test(letter) && (!/\(\)/g.test(letter));
  return `${letter} ${(bool ? "✅" : "❌")}`;
}

// 2. Ejecutamos la función
console.log(isValid("bici coche (balón) bici coche peluche"));
console.log(isValid("peluche (bici [coche) bici coche balón"));
console.log(isValid("(peluche {) bici"));
console.log(isValid("(muñeca) consola bici"));
console.log(isValid("bici coche (balón bici coche"));
console.log(isValid("() bici"));