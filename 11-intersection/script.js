/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
  const res = [];
  let find = arr2.slice();
  if (arr1.length > arr2.length) {
    find = arr1.slice();
  }

  for (let i in find) {
    if (arr1.includes(find[i]) && arr2.includes(find[i]) && !res.includes(find[i])) {
      res.push(find[i]);
    }
  }

  return res;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []