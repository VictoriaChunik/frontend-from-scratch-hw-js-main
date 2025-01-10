/*
В этом задании вам предстоит разработать интерактивный слайдер,
который позволит пользователю переключаться между
созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет
работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение
в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом
текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]
// сначала нужно найти элемент в DOM-model


let currentIndex = 0; // Индекс текущего изображения

function updateGallery() {
  const imageTag = document.getElementById('web-tech-image');
  imageTag.src = WEB_TECH_IMAGES[currentIndex]; // Устанавливаем начальное изображение

  const prevButton = document.querySelector('#prev-button');
  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--; // Переход к предыдущему изображению
      imageTag.src = WEB_TECH_IMAGES[currentIndex];
    }
  });

  const nextButton = document.querySelector('#next-button');
  nextButton.addEventListener('click', function () {
    if (currentIndex < WEB_TECH_IMAGES.length - 1) {
      currentIndex++; // Переход к следующему изображению
      imageTag.src = WEB_TECH_IMAGES[currentIndex];
    }
  });
}

updateGallery(); // Инициализация галереи

