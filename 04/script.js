
// 1. Funcion que devuelve un string con forma de arbol, recibe un numero de la altura del arbol
function createXmasTree(height) {

  let str = ""; // String a devolver, comienza vacío
  if (Number.isInteger(height) && (height>0) && (height<=100)) { //Verificamos si es un número válido

    let strLength = (height * 2) - 1; //Número de caracteres de todas las líneas
    let sides, center; //Variables para los lados "_" y centro "*" del arbol

    for (let i = 1; i <= height; i++) {
      const asterisksLength = ((i * 2) - 1); //Número de asteriscos "*" en esta iteración
      sides = "_".repeat((strLength - asterisksLength) / 2); //Generamos un string de un lado del arbol "_"
      center = "*".repeat(asterisksLength); //Generamos un string del centro del arbol "*"
      str += `${sides}${center}${sides}\n`; //Los agregamos al string
    }

    sides = "_".repeat((strLength - 1) / 2); //Generamos un string de un lado del arbol "_" para las 2 últimas líneas
    str += `${sides}#${sides}\n${sides}#${sides}`; //Los agregamos al string
    
  } else //Si no lo es devolvemos este mensaje
    str = "Debe ingresar un número entero positivo del 1 al 100";
  
  return str;
}

// 2. Ejecutamos la función
console.log(createXmasTree(10));