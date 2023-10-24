/** Условное ветвление */

let itemsCount = 100;

if (itemsCount < 0) {
    console.log('Ошибка при указании количества');
} else if (itemsCount < 10) {
    console.log('Скидка не предоставляется');
} else if (itemsCount < 100) {
    console.log('Скидка составляет 5%');
} else {
    console.log('Скидка составляет 10%');
}

// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

/** Циклы */

let secondsLeft = 59;

// Цикл с предусловием
while (secondsLeft > 0) {
    console.log(`Осталось ${secondsLeft} сек.`);
    secondsLeft--; // counterValue = counterValue - 1;
}

let secondsElapsed = 0;

// Цикл с постусловием
do {
    console.log(`Секунд прошло: ${counterValue}`);
    secondsElapsed++;
} while (secondsElapsed < 100);

const drinks = ['Cola', 'Pepsi', 'Fanta', 'Sprite'];

// Цикл for
for (let index = 0; index < drinks.length; index++) {
    console.log(drinks[index]);
}

const data = {
    1: { productName: 'Часы' },
    2: { productName: 'Картина' },
    3: { productName: 'Стол' },
};

// Цикл for in
for (const key in data) {
    console.log(data[key]);
}
