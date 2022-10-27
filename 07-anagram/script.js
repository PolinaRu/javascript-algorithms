/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
  const arr1 = [];
  const arr2 = [];

  for (let i in str1) {
    arr1.push(str1[i].toLowerCase());
  }
  for (let i in str2) {
    arr2.push(str2[i].toLowerCase());
  }

  if (arr1.sort().join('') === arr2.sort().join('')){
    return true;
  }
  return false;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('up', 'UP')); // false