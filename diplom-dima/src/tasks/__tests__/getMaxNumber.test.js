import { getMaxNumber } from '../01_getMaxNumber';

describe('getMaxNumber function', () => {
    it('should return 10 when 10 and 5 passed', () => {
        expect(getMaxNumber(10, 5)).toBe(10);
    });

    it('should return 5 when 5 and -3 passed', () => {
        expect(getMaxNumber(5, -3)).toBe(5);
    });

    it('should return -1 when -1 and -6 passed', () => {
        expect(getMaxNumber(-1, -5)).toBe(-1);
    });

    it('should return 3 when 3 and 3 passed', () => {
        expect(getMaxNumber(3, 3)).toBe(3);
    });

    it('should return NaN when passed not a number', () => {
        expect(getMaxNumber(null, 3)).toBe(NaN);
        expect(getMaxNumber('2', 3)).toBe(NaN);
        expect(getMaxNumber(6, undefined)).toBe(NaN);
        expect(getMaxNumber([2, 3, 4], { test: 3 })).toBe(NaN);
    });
});
