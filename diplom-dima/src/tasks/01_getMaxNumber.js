/**
 * Напишите функцию getMaxNumber, которая принимает два числа в качестве аргументов и возвращает большее из них
 *
 * Граничные значения:
 * 1. Если числа равны, возвращает первое из них
 * 2. Если хотя бы один из аргументов не является числом, возвращаем значение NaN
 *
 * Пример: getMaxNumber(5, 10) === 10
 */

// <-- Тут реализация функции getMaxNumber
export function getMaxNumber(a, b) {
    if  ((typeof a != 'number') || (typeof b != 'number'))
    {
        return NaN;
        }

    if ((a > b) || (a===b))
    {
        return a;
    }
    else if (a < b)
    {
        return b;
    }
};

