import { countProducts } from '../05_countProducts';

describe('countProducts function: ', () => {
    it('should count products with discount', () => {
        expect(
            countProducts([
                { name: 'Первый носок', discount: 3 },
                { name: 'Второй носок', discount: null },
                { name: 'Зарядное устройство', discount: 2 },
            ])
        ).toEqual({ count: 3, withDiscount: 2 });

        expect(
            countProducts([
                { name: 'Первый носок', discount: 3 },
                { name: 'Второй носок', discount: null },
                { name: 'Зарядное устройство', discount: 2 },
                { name: 'Третий носок', discount: null },
                { name: 'Четвертый носок', discount: 2 },
            ])
        ).toEqual({ count: 5, withDiscount: 3 });
    });

    it('should return zero counters for empty array', () => {
        expect(countProducts([])).toEqual({ count: 0, withDiscount: 0 });
    });
});
