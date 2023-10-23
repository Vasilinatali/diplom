/* 
 Задача:

    Реализовать функцию removeFalsyValues, которая удаляет все ложные значения из массива
    (Ложные значения это значения которые при приведении к boolean равняются false)

    Входные значения:
        Массив смешанных примитивных типов (boolean, string, number, null, undefined)

    Выходные значения:
        Массив смешанных примитивных типов в котором отсутствуют ложные значения

    Пример:
        removeFalsyValues([0, 1, '', 'test', null, 4]) // Ожидаемый результат [1, 'test', 4]
 */

// <-- тут реализация removeFalsyValues
export function removeFalsyValues(in_arr)
{
    let temp_arr = [];
    for (let i = 0; i < in_arr.length; i++)
    {
        if (Boolean(in_arr[i]) === true)
        {
            temp_arr.push(in_arr[i]);
        } 
    }
    return temp_arr;
}