import { defaultMultiselectLocalization } from './localization';

describe('Multiselect lozalization', () => {
    test('defaultMultiselectLocalization', async () => {
        expect(defaultMultiselectLocalization('ds.multiselect.empty', undefined)).toBe('Нет элементов для отображения');
        expect(defaultMultiselectLocalization('ds.multiselect.extra', { count: 5 })).toBe('Еще 5');
    });
});
