/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
 */

function palindrome(str) {
  let alfa = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮёйцукенгшщзхъфывапролджэячсмитьбю'
  let str0 = '';
  let str1 = '';

  for (let i = 0; i < str.length; i++) {
    if (alfa.indexOf(str[i]) != -1) {
      str0 += str[i];
    }
  }

  for (let i = str0.length; i > 0; i--) {
    str1 += str0[i - 1];
  }
  return str0.toLowerCase() == str1.toLocaleLowerCase();
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome("топот")); // должно быть true
console.log(palindrome("Saippuakivikauppias")); // true
console.log(palindrome("привет")); // false
console.log(palindrome('О, лета тело!')); // true
/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 *
 * palindrome('О, лета тело!'); // true
 *
 */
