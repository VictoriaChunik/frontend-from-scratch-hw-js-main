/*
Задание: Реализация интерактивного отсчёта запуска ракеты

Цель задания: Написать код для обработки событий нажатия
на кнопки "Старт" и "Отмена", реализуя обратный отсчёт с помощью JavaScript.

Задача:

1. Добавить обработчик событий для кнопки "Старт":

- При нажатии на кнопку "Старт" должен начаться обратный отсчёт с 3 до 1.
Значение счётчика должно отображаться в элементе countdownDisplay.
Цифра 3 должна отобразиться немедленно.
- Каждую секунду значение счётчика должно уменьшаться на 1.
- Когда счётчик достигнет 0, вместо 0 должен отображаться эмодзи ракеты "🚀"
и таймер должен быть остановлен. Пользователь видит: 3 -> 2 -> 1 -> 🚀


2. Добавить обработчик событий для кнопки "Отмена":

- При нажатии на кнопку "Отмена" таймер должен быть остановлен
- В элементе отображения счётчика (countdownDisplay) должно появиться сообщение "Отменено".
- Отмена таймера возможна только во время его работы
- После отмены таймера возможен повторный запуск ракеты

Обратите внимание на корректность работы таймера:
повторное нажатие на "Старт" не должно приводить к нескольким одновременно работающим таймерам.

Подсказки:
- 🧙‍♂️ Для выполнения этого задания нужно познакомиться с браузерными
функциями setInterval (https://doka.guide/js/setinterval/) и clearInterval(https://doka.guide/js/clearinterval/). Они очень похоже на setTimeout и clearTimeout.
 */

const startButton = document.getElementById('start')
const cancelButton = document.getElementById('cancel')
const countdownDisplay = document.getElementById('countdown')

let isTimerStarted = false
let timerId

startButton.addEventListener('click', () => {
  if (isTimerRunning) return; // Если таймер уже запущен, ничего не делаем

  let counter = 3; // Начальное значение счетчика
  countdownDisplay.textContent = counter; // Сразу отображаем 3
  isTimerRunning = true; // Устанавливаем состояние таймера в "работает"

  // Устанавливаем интервал
  timerId = setInterval(() => {
    counter--; // Уменьшаем счётчик на 1
    countdownDisplay.textContent = counter; // Обновляем отображение

    if (counter === 0) { // Когда счётчик достигнет 0
      countdownDisplay.textContent = '🚀'; // Отображаем эмодзи ракеты
      clearInterval(timerId); // Останавливаем таймер
      isTimerRunning = false; // Сбрасываем состояние таймера
    }
  }, 1000);
});

cancelButton.addEventListener('click', () => {
  if (!isTimerRunning) return; // Если таймер не работает, ничего не делаем

  // Остановка таймера
  clearInterval(timerId);
  countdownDisplay.textContent = 'Отменено'; // Отображаем сообщение "Отменено"
  isTimerRunning = false; // Сбрасываем состояние таймера
});
