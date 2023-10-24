/**
 * Написать функцию countProducts которая подсчитывает количество товаров и количество товаров со скидкой
 *
 * Входные данные:
 *  Массив объектов вида {name: "Название товара", discount: number или null}
 *
 * Выходные данные:
 *  Объект вида: { count: <количество товаров>, withDiscount: <количество товаров со скидкой>}
 *
 * Пример:
 *
 * countProducts([{name: "Первый носок", discount: 3}, {name: "Второй носок", discount: null}, {name: "Зарядное устройство", discount: 2}])
 *
 * Ожидаемый результат: { count: 3, withDiscount: 2}
 */

// <-- Тут реализация countProducts
export function countProducts(products)
{
    let count_Products = 0;
    let count_Products_Wth_Discnt = 0
    for (const product in products)
    {
        count_Products++;
        if (products[product].discount != null)
        {
            count_Products_Wth_Discnt++;
            }
        
        /*if (products.discount != null)
        {
        }*/
    }
    return { 'count': count_Products, 'withDiscount': count_Products_Wth_Discnt };
}