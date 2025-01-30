/*
Напишите функцию `updateGallery`,
которая будет обновлять
информацию о произведениях
искусства в виртуальной галерее.
Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием
уже есть в галерее, его значение должно
быть обновлено. Если произведения нет,
оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/


const gallery = {
   //title             //artist
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

function updateGallery(gallery, key, artist) {
  // Если произведение с таким названием уже есть, обновляем его значение
  // Если произведения нет, добавляем его в объект
  gallery[key] = artist; // Это условие выполняет обе задачи: обновление и добавление
}

//gallery['New Artwork 3'] = 'Artist Unknown 2';//  так дабавим новый клю и значения
gallery.NewArtwork3 = 'Artist Unknown 2';


// Примеры использования функции
updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506'); // Обновление
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali'); // Добавление
updateGallery(gallery, 'New Artwork', null);
updateGallery(gallery, '', 'Unknown Artist');
updateGallery(gallery, 'Another Artwork', undefined);
updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503');
updateGallery(gallery, 'Starry Night', 'Vincent van Gogh, 1889');
updateGallery(gallery, 'New Artwork 2', 'Artist Unknown');
updateGallery(gallery, 1, 'Numbered Artwork');

console.log(gallery);
