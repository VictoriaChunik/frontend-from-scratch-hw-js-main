/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false //статус администратора
const isVerifiedUser = true //быть подтвержденным пользователем(тоесть пршол верефикацию)
const hasSpecialPermission = true// должен обладать специальным разрешением
const hasTemporaryPass = false //временным пропуском

let isAccess;// тогда дать допуск
// your code

// Проверяем условия доступа
if ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)) {
  isAccess = true; // Доступ предоставлен
} else {
  isAccess = false; // Доступ не предоставлен
}

console.log(isAccess); // Выводим результат
