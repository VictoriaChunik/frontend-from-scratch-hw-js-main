/*
  Нужно написать функцию capitalizeWords, которая принимает строку и
  делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript",
  функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for.
   Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/
let str = 'Hello World From JavaScript';

function capitalizeWords(str) {
    // Разбиваем строку на слова
    let words = str.split(' '); // ['Hello', 'World', 'From', 'JavaScript']

    // Применяем toUpperCase к первой букве каждого слова
    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // Объединяем слова обратно в строку
    return words.join(' '); // 'Hello World From JavaScript'
}
console.log(capitalizeWords(str));
