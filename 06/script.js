
// 1. Funcion que devuelve un array de 2 valores que sumen un resultado esperado
function sumPairs(numbers, result) {
  let arr = [];

  for (let idx = 0; idx < (numbers.length - 1); idx++) {
    
    for (let i = (idx + 1); i < numbers.length; i++) {

      if ((numbers[idx] + numbers[i]) === result) {
        arr.push(numbers[idx], numbers[i]);
        break;
      }
      
    }
    if (arr.length) break;

  }

  return arr.length ? arr : null;
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]