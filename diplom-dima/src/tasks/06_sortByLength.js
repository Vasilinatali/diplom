/**
 * Написать функцию sortByLength которая принимает массив строк и возвращает массив этих же строк, но в отсортированном порядке
 *
 * Граничные значения: Может приходить пустой массив, внутри массивов всегда строки (возможно пустые)
 *
 * Важно:
 * Функция не должна мутировать изначальный массив
 *
 * Пример:
 *
 * sortByLength(['example', 'cat', 'test', 'dog']) === ['cat', 'dog', 'test', 'example']
 */

// <--- тут реализация
export function sortByLength(in_arr) {
    let temp_arr = []
    for (let i = 0; i < in_arr.length; i++) {
        temp_arr[i] = in_arr[i];
    }
    
    
    temp_arr.sort(function (a, b) {
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return a.length - b.length
    });
    return temp_arr;
}
