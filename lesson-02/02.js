/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = 1; // your code
let dice2  = 6;// your code
let isWinningDouble = false; // your code

while (isWinningDouble) {
  // Тело цикла будет содержать логику игры
  let isWinningDouble = Math.floor(Math.random() * 6)// идет выбор из 2 возможных вариантов

  if (dice1 === dice2) {
    console.log('Первый бросок: ' + dice1)
  } else {
    console.log('Второй бросок: ' + dice2)
  }
  if (isWinningDouble >= 3) {
  console.log('Выигрышный дубль!')
  } else {
  console.log('Не выигрышный дубль.')
  }
  isWinningDouble = true;
}
console.log(isWinningDouble)
