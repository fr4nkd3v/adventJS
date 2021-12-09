
// 1. Funcion que devuelve 
function groupBy(collection, it) {

  const resObj = collection.reduce( (obj, item) => { // Iteramos el objeto collection y cada resultado se agregará a un objeto nuevo

    // Si "it" es una funcion entonces la llamamos pasando "item" como argumento
    // Si no lo es (lo q significa q es un string y a su vez un método) entonces lo llamamos como un metodo de "item"
    const prop = (typeof it === 'function') ? it(item) : item[it];

    // Si existe la propiedad en el objeto "collection" solo lo igualamos, si no lo creamos e igualamos a un array vacío
    obj[prop] = (obj[prop] || []);
    obj[prop].push(item); // Y agregamos el item

    return obj;
  }, {} );

  return resObj;
}

// 2. Ejecutamos la función
groupBy([6.1, 4.2, 6.3], Math.floor);
groupBy(['one', 'two', 'three'], 'length');
groupBy([{ age: 23 }, { age: 24 }], 'age');
groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
);
groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')