/**
 * Напишите функцию reverseString, которая принимает строку в качестве аргумента и возвращает эту строку задом наперед.
 *
 * Граничные значения:
 *  Если на вход подается строка с большой буквы, результирующая строка должна начинаться с большой буквы и заканчиваться маленькой
 *
 * Пример: reverseString('Live') === 'Evil'
 *
 */

// <-- Тут реализация функции reverseString
export function reverseString(text) {
    let insertText = String(text)
    
    let resultText = "";
    for (let letter of insertText)
    {
        let firstlttrInUpperCase = false;
        if (insertText[0] === insertText.charAt(0).toUpperCase())
        {
            firstlttrInUpperCase = true
        }
        else {
            firstlttrInUpperCase = false
        }
        resultText = letter + resultText;
        if (firstlttrInUpperCase)
        {
            resultText = resultText.charAt(0).toUpperCase() + resultText.slice(1).toLowerCase();
        }
    }
    return resultText;
}