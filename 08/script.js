
// 1. Funcion que devuelve la ganancia maxima posible, recibe un array de precios a lo largo del día
function maxProfit(prices) {

  let min, max; // el precio minimo a comprar y maximo a vender
  const ascSortPrices = [...prices].sort( (a, b) => a - b); // copiamos los precios y ordenamos de menor a mayor

  for (const idx in ascSortPrices) { //iteramos los precios ordenados
    
    const index = prices.indexOf(ascSortPrices[idx]);

    const nextPrices = prices.slice(index + 1)
      .filter(val => val > ascSortPrices[idx]); // Filtra por los que son mayores al precio
    nextPrices.sort((a, b) => b - a); // Ordena de mayor a menor (Descendente)

    if (nextPrices.length) { // Si encuentra precios siguientes q cumplen las condiciones
      // Entonces los tenemos :D y termina todo
      min = ascSortPrices[idx];
      max = nextPrices[0];
      break;
    }
  }
  // Retorna la ganancia (max - min)
  return (max && min) ? (max - min) : -1;
}

// 2. Ejecutamos la función
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc));

const pricesEth = [10, 20, 30, 40, 50, 60, 70]
console.log(maxProfit(pricesEth));

const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log(maxProfit(pricesDoge));

const pricesAda = [3, 3, 3, 3, 3]
console.log(maxProfit(pricesAda));