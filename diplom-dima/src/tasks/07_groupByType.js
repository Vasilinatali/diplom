/* Время:
	Задача:
		Реализовать функцию groupShopsByLegalStatus которая группирует магазины по юридическому статусу

	Входные данные:
		Массив объектов вида { name: string, type: 'legal' }, 
        где поле type может быть либо 'physical', либо 'legal'

	Выходные данные:
		Объект со сгруппированными магазинами: { physical: array, legal: array }

    Пример:

    groupByType([{name: 'Fairy tale', type: 'legal'}, {name: 'Last Hope', type: 'legal'}, {name: 'Flooded depth', type: 'physical'}])

    Результат вызова: 
    { 
        legal: [{name: 'Fairy tale'}, {name: 'Last Hope'}], 
        physical: [{name: 'Flooded depth'}]
    }
 */

// <-- тут реализация groupByType
export function groupByType(products)
{
    let out_params = { legal:[], physical:[]}
    for (const product of products)
    {
        if (product.type === 'legal' )
        {
            out_params['legal'].push({ name:product.name });
        }
        else if (product.type === 'physical')
        {
             out_params['physical'].push({ name:product.name });
        }
    }
    return out_params
}