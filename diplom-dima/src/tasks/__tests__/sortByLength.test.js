import { sortByLength } from '../06_sortByLength';

describe('sortByLength', () => {
    it('should sort array of strings by string length', () => {
        expect(sortByLength(['example', 'cat', 'test', 'dog'])).toEqual([
            'cat',
            'dog',
            'test',
            'example',
        ]);

        expect(sortByLength(['1', '', '4444', '22', '333'])).toEqual([
            '',
            '1',
            '22',
            '333',
            '4444',
        ]);
    });

    it('should not mutate initial array', () => {
        const initial = ['1', '', '333', '22'];
        const copy = [...initial];

        sortByLength(initial);

        expect(initial).toEqual(copy);
    });
});
