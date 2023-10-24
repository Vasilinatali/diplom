import { removeFalsyValues } from '../03_removeFalsyValues';

describe('removeFalsyValues function', () => {
    it('should not contain falsy values', () => {
        const array = [0, 1, '', false, 'test', null, 4, true, undefined];
        const result = [1, 'test', 4, true];
        expect(removeFalsyValues(array)).toEqual(result);
    });

    it('should be a copy of source array', () => {
        const array = [1, 1, 1, 'test', true];
        expect(removeFalsyValues(array)).toEqual(array);
    });

    it('should be empty array', () => {
        const array = [0, false, undefined, null, ''];
        expect(removeFalsyValues(array)).toEqual([]);
    });

    it('should not mutate initial array', () => {
        const array = [0, 1, '', false, 'test', null, 4, true, undefined];
        const copy = [...array];

        removeFalsyValues(array);

        expect(array).toEqual(copy);
    });
});
