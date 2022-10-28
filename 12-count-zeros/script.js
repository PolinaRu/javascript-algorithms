/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 * 
*/

function countZeros(n) {
  let res = 0;
  let str;
  for (let i=1; i<=n; i++){
    str = i.toString();
    while (str.indexOf('0') > -1) {
      res +=1;
      str = str.slice(str.indexOf('0')+1);
    }
  }
  return res;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

//console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
//console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
console.log(countZeros(342));