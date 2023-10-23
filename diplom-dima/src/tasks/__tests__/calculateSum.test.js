import { calculateSum } from '../04_calculateSum';

describe('calculateSum function: ', () => {
    test('should return sum of two values', () => {
        expect(calculateSum(1, 3)).toBe(4);
    });

    test('should return sum of arguments with zeroes and negative', () => {
        expect(calculateSum(-1, -2, 0, 3, 1, 0, 4, 5)).toBe(10);
    });

    test('should return zero when no arguments', () => {
        expect(calculateSum()).toBe(0);
    });
});
