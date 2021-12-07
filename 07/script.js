// 1. Objetos de los Almacenes
const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

// 2. Funcion que devuelve un booleano si encuentra un producto en específico en un almacén en específico
function contains(store, product) {
  
  const str = JSON.stringify(store); //Convertimos el objeto a string
  const regex = new RegExp(`:\"${product}\"`, "g"); // Creamos un regex que busca el nombre del producto con un formato

  return regex.test(str); // Retorna true si lo encuentra
}

// 3. Ejecutamos la función
console.log(contains(almacen, "fanta"));
console.log(contains(otroAlmacen, "gameboy"));
