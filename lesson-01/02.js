/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code

let n = 5;
let fact = 1;
// 5! = 5 * 4 * 3 * 2 * 1 -  расписаная формула
//n!=n×(n−1)×(n−2)- формула
//факториал числа 10
while (n >= 1) { //цикл работает пока 10 не будет 10
 fact = fact * n;
  n --           //5 отнимает - 1
}
console.log(fact);
