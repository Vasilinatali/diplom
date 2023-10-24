/* Время:
	Задача:
		Реализовать функцию calculateSum, которая принимает от 0 до N аргументов и возвращает результат их сложения

	Входные данные:
		Aргументы типа number. Допустимы положительные, отрицательные и нулевые значения

	Выходные данные:
		Сумма всех аргументов типа number

	Пример:
		calculateSum(1, 2, 3, 4) // Ожидаемый результат равен 10
 */

// <-- тут реализация
export function calculateSum()
{
	let summ = 0;
	for (let i = 0; i < arguments.length; i++)
	{
		if (typeof arguments[i] === 'number')
		{
			summ += arguments[i]
		}
	}
	return summ;
}