/*
Реализовать метод `addResource`, который будет
добавлять указанное количество ресурсов
к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`,
 метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять
значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = { // обьект
  resources: {
    gold: 250,//(resource) тип ресурса
    lumber: 100,//amount
  },
  addResource(resource, amount) {// Метод должен принимать два параметра:
    // Проверяем, существует ли ресурс
                     //game.resources
    if (!(resource in this.resources)) {// если resource не существует в this.resources.
      console.log('Invalid resource');
    } else {
      // Добавляем количество ресурса
      // game.resources
      this.resources[resource] += amount; // дабавляем число    game.resources
      console.log(`дабавдено ${amount} ${resource}. новое amount: ${this.resources[resource]}`);
    }
  }
}

// Пример использования
console.log(game.resources); // Проверим текущее состояние ресурсов
