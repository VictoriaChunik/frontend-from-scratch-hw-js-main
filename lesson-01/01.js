// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0; // Инициализируем переменную
let i = 1;   // Начинем с 1 так  как сказано от 1 до 20 это счетчик для накопления цифр

while (i <= 20) { // Пока счетчик  меньше 20 выполянется цикл
    sum = sum + i; // копим число (i) 1,2,3,4,5 и тд  и дабовляем его к sum
    i ++; // Увеличиваем i на 1 + 1 =2 ,2 +1 = 3
}
console.log(sum); // Выводим сумму в консоль

