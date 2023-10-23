/**
 * Типы данных
 */

// Числа представлены типом "number"
let durationMs = 1000;
let dollarExchangeRate = 97.8;
let minValue = -Infinity;
let maxValue = Infinity;
let notANumber = NaN; // Не число, можно получить например поделив число на строку

// Строки представлены типом "string"
let companyName = 'Livemaster LLC';
let dollarExchangeLabel = `Курс доллара на сегодня: ${dollarExchangeRate}`;

// Логические значения представляет тип "boolean"
let hasAccount = true;
let isAuthorized = false;

// Специальные типы
let User = null;
let futureRates = undefined;

/********************** Объекты ****************************/

let user = {
    id: 234,
    nickname: 'Patric',
    hasPremium: false,
    tariff: {
        id: 223,
        name: 'Standart',
    },
};

// Доступ к свойствам user.id,

// Массивы
let mixedArray = [1, 'test', true, 23];

console.log(typeof mixedArray); // Object

// todo ссылки значения
