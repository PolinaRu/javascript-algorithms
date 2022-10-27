/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  if (str.length > 1) {
    const res = str.split(" ");
    for (let i in res) {
      if (res[i] !== ' ' && res[i] > '') {
        res[i] = res[i][0].toUpperCase() + res[i].slice(1);
      }
    }
    return res.join(" ");
  }
  return str;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

//console.log(capitalize("слово ")); // "молодость всё простит Молодость Всё Простит"
