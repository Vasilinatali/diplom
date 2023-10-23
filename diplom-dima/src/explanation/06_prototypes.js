/** Прототипы */

const number = 10.1234;
const string = 'some text in quotes';
const obj = { test: '34' };
const array = [1, 2, 6, 3, 4, -2, 5, 4];

/* Числа */
const fixedNumber = number.toFixed();
const exponantialNumber = number.toExponential();
const numberWithPrecision = number.toPrecision(2);

/* Строки */
const testString = string.concat(' concated');
const hasQuote = string.includes('quote');
const quoteIndex = string.indexOf('quote');
const firstUnderScoredString = string.replace(' ', '_');
const fullUnderScoredString = string.replace(/ /g, '_'); // регулярные выражения https://learn.javascript.ru/regular-expressions
const textWithSpaces = string.match(/[A-z ]+/g);

/* Object */
const hasTestProperty = obj.hasOwnProperty('test');

/** Array */
const concatedArray = array.concat([5, 6, 7, 8]);
const hasNumberFive = array.includes(5);
const arrayLengthWithFive = array.push(5);
const arrayLengthWithZero = array.unshift(0);
const zero = array.shift();
const five = array.pop();

/** Самые полезные функции */
const isOnlyNumberArray = array.every((item) => typeof item === 'number'); // Проверка что все элементы удовлетворяют условию

const hasNegativeNumbers = array.some((item) => item < 0); // Проверка что некоторые элементы удовлетворяют условию

const doubledArray = array.map((item) => item * 2); // Применяет к каждому элементу коллбек функцию и заменяет её возвращаемым значением элемент

const onlyPositiveNumbers = array.filter((item) => item > 0); // Применяет коллбек к каждому элементу и убирает элемент из массива, если коллбек вернул false

const sortedArray = array.sort((a, b) => a - b);

const arraySum = array.reduce((accumulator, item) => {
    return accumulator + item;
}, 0); // сводит массив к значению аккумулятора, возвращаемое значение коллбека заменяет текущее значение аккумулятора

array.forEach((item) => console.log(item)); // Просто применяет коллбек к каждому элементу массива
