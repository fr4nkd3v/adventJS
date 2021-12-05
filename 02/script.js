// 1. String con los datos
const carta = '   bici coche balón _playstation bici coche peluche   '

// 2. Funcion que arma un objeto con el nombre del regalo como propiedades y con su número total como el valor de la propiedad
function listGifts(letter) {
  //Quitamos espacios adelante y atras (.trim), reemplazamos posibles dobles espacios por uno solo (.replace), creamos el array cortando en los espacios (.split)
  let arr = letter.trim().replace(/\s+/g," ").split(" ");
  //Filtramos los strings que contienen "_" (.includes), creamos un objeto final (.reduce)
  let obj = arr
    .filter( gift => !gift.includes("_") )
    .reduce( (objAcc, gift) => {

      objAcc[gift] = (objAcc[gift] || 0) + 1;
      return objAcc;
    }, {} );

  return obj;
}

// 3. Ejecutamos la función y mostramos en consola
const giftList = listGifts(carta);
console.log(giftList);