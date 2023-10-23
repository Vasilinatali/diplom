import { reverseString } from '../02_reverseString';

describe('reverseString function:', () => {
    it('should reverse "drakula" to "alukard"', () => {
        expect(reverseString('drakula')).toBe('alukard');
    });

    it('should reverse "Star" to "Rats"', () => {
        expect(reverseString('Star')).toBe('Rats');
    });

    it('should not change empty string', () => {
        expect(reverseString('')).toBe('');
    });
});
