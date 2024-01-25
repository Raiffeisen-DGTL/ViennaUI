import { Localization, useLocalization } from './localization';

describe('Localization', () => {
    interface ComponentLocalization {
        'ds.component.desc': string;
        'ds.component.title': string;
    }

    const functionLocalization: Localization<ComponentLocalization, { count: number }> = jest.fn((key, context) => {
        if (key === 'ds.component.desc') {
            return `description number ${context?.count}`;
        }

        return 'just title';
    });

    test('useLocalization w/ defaultObject', async () => {
        const localizeDefaultObject = useLocalization(undefined, { 'ds.component.desc': 'simple description' });
        expect(localizeDefaultObject('ds.component.desc')).toBe('simple description');
    });

    test('useLocalization w/ defaultFunction', async () => {
        const localizeDefaultFunction = useLocalization<ComponentLocalization, { count: number }>(
            undefined,
            functionLocalization
        );
        expect(localizeDefaultFunction('ds.component.desc', { count: 4 })).toBe('description number 4');
        expect(functionLocalization).toBeCalledWith('ds.component.desc', { count: 4 });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        functionLocalization.mockClear();

        expect(localizeDefaultFunction('ds.component.title')).toBe('just title');
        expect(functionLocalization).toBeCalledWith('ds.component.title', undefined);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        functionLocalization.mockClear();
    });

    test('useLocalization w/ customObject', async () => {
        const localizeCustomObject = useLocalization(
            { 'ds.component.desc': 'custom description' },
            { 'ds.component.desc': 'simple description' }
        );
        expect(localizeCustomObject('ds.component.desc')).toBe('custom description');
    });

    test('useLocalization w/ partial customObject', async () => {
        const localizeCustomObject = useLocalization(
            { 'ds.component.desc': 'custom description' },
            { 'ds.component.desc': 'simple description', 'ds.component.title': 'just title' }
        );
        expect(localizeCustomObject('ds.component.desc')).toBe('custom description');
        expect(localizeCustomObject('ds.component.title')).toBe('just title');
    });

    test('useLocalization w/ customFunction', async () => {
        const customFunctionLocalization: Localization<ComponentLocalization, { count: number }> = jest.fn(
            (key, context) => {
                if (key === 'ds.component.desc') {
                    return `custom description number ${context?.count}`;
                }

                return 'custom title';
            }
        );
        const localizeCustomFunction = useLocalization<ComponentLocalization, { count: number }>(
            customFunctionLocalization,
            functionLocalization
        );
        expect(localizeCustomFunction('ds.component.desc', { count: 4 })).toBe('custom description number 4');
        expect(customFunctionLocalization).toBeCalledWith('ds.component.desc', { count: 4 });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        customFunctionLocalization.mockClear();
    });

    test('useLocalization w/ partial customFunction', async () => {
        const customFunctionLocalization: Localization<ComponentLocalization, { count: number }> = jest.fn(
            (key, context) => {
                if (key === 'ds.component.desc') {
                    return `custom description number ${context?.count}`;
                }

                return undefined;
            }
        );
        const localizeCustomFunction = useLocalization<ComponentLocalization, { count: number }>(
            customFunctionLocalization,
            functionLocalization
        );
        expect(localizeCustomFunction('ds.component.desc', { count: 4 })).toBe('custom description number 4');
        expect(localizeCustomFunction('ds.component.title')).toBe('just title');
        expect(customFunctionLocalization).toBeCalledTimes(2);
        expect(customFunctionLocalization).toBeCalledWith('ds.component.desc', { count: 4 });
        expect(customFunctionLocalization).toHaveBeenNthCalledWith(1, 'ds.component.desc', { count: 4 });
        expect(customFunctionLocalization).toHaveBeenNthCalledWith(2, 'ds.component.title', undefined);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        customFunctionLocalization.mockClear();
    });
});
