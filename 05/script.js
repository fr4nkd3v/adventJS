
// 1. Funcion que devuelve un string diciendo cuantos días que faltan o sobran para Navidad :D
function daysToXmas(date) {

  let Xmas = new Date("Dec 25, 2021"); //fecha de Navidad ._.

  // Restamos las fechas, lo dividimos hasta convertirlo a días, lo redondeamos al entero mayor mas cercano
  let remainingDays = Math.ceil((Xmas - date) / 1000 / 60 / 60 / 24);

  // Generamos el string de respuesta
  let str;
  if (remainingDays > 1)          str = `Faltan ${remainingDays} días para Navidad 😁`
  else if (remainingDays === 1)   str = `Falta ${remainingDays} día para Navidad 😃`
  else if (remainingDays === 0)   str = `Hoy es Navidad! 😱`
  else if (remainingDays === -1)  str = `Ya pasó ${Math.abs(remainingDays)} día desde Navidad 😅`
  else                            str = `Ya pasaron ${Math.abs(remainingDays)} días desde Navidad 😅`

  return str;
}

// 2. Ejecutamos la función
const date1 = new Date('Dec 1, 2021');
console.log(daysToXmas(date1));
const date2 = new Date('Dec 24, 2021 00:00:01');
console.log(daysToXmas(date2));
const date3 = new Date('Dec 24, 2021 23:59:59');
console.log(daysToXmas(date3));
const date4 = new Date("December 20, 2021 03:24:00");
console.log(daysToXmas(date4));
const date5 = new Date('Dec 25, 2021');
console.log(daysToXmas(date5));
const date6 = new Date('Dec 26, 2021');
console.log(daysToXmas(date6));
const date7 = new Date('Dec 31, 2021');
console.log(daysToXmas(date7));
const date8 = new Date('Jan 1, 2022 00:00:01');
console.log(daysToXmas(date8));
const date9 = new Date('Jan 1, 2022 23:59:59');
console.log(daysToXmas(date9));