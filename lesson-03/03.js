// Разработайте функцию findLargest,
// которая принимает три числа и возвращает наибольшее из них.

function findLargest(number_1, number_2, number_3) {
  if (number_1 >= number_2 && number_1 >= number_3) {
    return number_1;
  } else if (number_2 >= number_1 && number_2 >= number_3) {
    return number_2;
  } else {
    return number_3;
  }
}
let result_number = findLargest(6, 5, 9)
console.log(result_number)
