import { getLastIndex } from './getLastIndex';

describe('getLastIndex', function () {
    test('Вернет индекс последней доступной страницы', () => {
        const result = getLastIndex(55, 10);

        expect(result).toBe(5);
    });
    test('Единственная страница будет и последней доступной', () => {
        const result = getLastIndex(0, 10);

        expect(result).toBe(0);
    });
});
