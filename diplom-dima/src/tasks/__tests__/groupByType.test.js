import { groupByType } from '../07_groupByType';

const LEGAL_STATUS = {
    PHYSICAL_ENTITY: 'physical',
    LEGAL_ENTITY: 'legal',
};

describe('groupShopsByLegalStatus function: ', () => {
    test('should pack shops by legal status', () => {
        const shops = [
            { name: 'My Diamonds', type: LEGAL_STATUS.LEGAL_ENTITY },
            { name: 'Wood Products', type: LEGAL_STATUS.PHYSICAL_ENTITY },
            { name: 'Nature jewelry', type: LEGAL_STATUS.PHYSICAL_ENTITY },
            { name: 'Eco paradise', type: LEGAL_STATUS.LEGAL_ENTITY },
            { name: 'Iron place', type: LEGAL_STATUS.PHYSICAL_ENTITY },
        ];

        const awaiting = {
            [LEGAL_STATUS.LEGAL_ENTITY]: [
                { name: 'My Diamonds' },
                { name: 'Eco paradise' },
            ],
            [LEGAL_STATUS.PHYSICAL_ENTITY]: [
                { name: 'Wood Products' },
                { name: 'Nature jewelry' },
                { name: 'Iron place' },
            ],
        };

        expect(groupByType(shops)).toEqual(awaiting);
    });

    test('should return empty legal entities list and packed physical entities list', () => {
        const shops = [
            { name: 'Wood Products', type: LEGAL_STATUS.PHYSICAL_ENTITY },
            { name: 'Nature jewelry', type: LEGAL_STATUS.PHYSICAL_ENTITY },
            { name: 'Iron place', type: LEGAL_STATUS.PHYSICAL_ENTITY },
        ];

        const awaiting = {
            [LEGAL_STATUS.LEGAL_ENTITY]: [],
            [LEGAL_STATUS.PHYSICAL_ENTITY]: [
                { name: 'Wood Products' },
                { name: 'Nature jewelry' },
                { name: 'Iron place' },
            ],
        };

        expect(groupByType(shops)).toEqual(awaiting);
    });

    test('should return empty physical entities list and packed legal entities list', () => {
        const shops = [
            { name: 'My Diamonds', type: LEGAL_STATUS.LEGAL_ENTITY },
            { name: 'Eco paradise', type: LEGAL_STATUS.LEGAL_ENTITY },
        ];

        const awaiting = {
            [LEGAL_STATUS.LEGAL_ENTITY]: [
                { name: 'My Diamonds' },
                { name: 'Eco paradise' },
            ],
            [LEGAL_STATUS.PHYSICAL_ENTITY]: [],
        };

        expect(groupByType(shops)).toEqual(awaiting);
    });
});
