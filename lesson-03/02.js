// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
  if (number % 2 == 0 ) {//  проверяем четность числа
    return true
  } else {
    return false
  }
}
// let result = isEven(9)
// console.log(result)
console.log(isEven(9))
