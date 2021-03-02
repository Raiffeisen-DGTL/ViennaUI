import { defaultMultiselectLocalization } from './localization';

describe('Multiselect lozalization', () => {
    test('defaultMultiselectLocalization', async () => {
        expect(defaultMultiselectLocalization('ds.multiselect.empty', undefined)).toEqual(
            'Нет элементов для отображения'
        );
        expect(defaultMultiselectLocalization('ds.multiselect.extra', { count: 5 })).toEqual('Еще 5');
    });
});
