import { BaseModule } from './BaseModule';
import { baseService } from './BaseService';

describe('Base module', () => {
    test('Init config', () => {
        const moduleParams = {
            settings: {
                noHeader: true,
                noRowDivider: true,
                maxHeight: true,
                size: true,
                incorrectProp: true,
            },
        };

        const expected = {
            noHeader: true,
            noRowDivider: true,
            maxHeight: true,
            size: true,
        };

        const config = BaseModule.initConfig && BaseModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();
        expect(config.settings).not.toBeUndefined();

        for (const [key, value] of Object.entries(expected)) {
            expect(config.settings[key]).toEqual(value);
        }

        expect(config.settings.incorrectProp).toBeUndefined();
    });
});

describe('Base service', () => {
    const state: any = {
        columns: {
            list: [{ id: '1', hidden: true }, { id: '2' }, { id: '3' }],
        },
    };
    let newState: any = {};
    const update = (state) => {
        newState = state;
    };

    const service = baseService(state, update);

    test('AllColumns', () => {
        const columns = service.allColumns();

        expect(columns).toHaveLength(3);
        expect(columns.find((i) => i.id === '1')).not.toBeUndefined();
    });

    test('Columns', () => {
        const columns = service.columns();

        expect(columns).toHaveLength(2);
        expect(columns.find((i) => i.id === '1')).toBeUndefined();
    });

    test('Colspan', () => {
        expect(service.colSpan()).toEqual(4);
    });

    test('Show Column', () => {
        service.showColumn('1');
        expect(newState.columns.list.find((i) => i.id === '1')).not.toBeUndefined();
    });

    test('Hide column', () => {
        service.hideColumn('2');
        expect(newState.columns.list.find((i) => i.id === '2').hidden).toBe(true);
    });

    test('Show all columns', () => {
        service.showAllColumns();
        newState.columns.list.forEach((column) => {
            expect(column.hidden).toBe(false);
        });
    });
    test('Hide all columns', () => {
        service.hideAllColumns();
        newState.columns.list.forEach((column) => {
            expect(column.hidden).toBe(true);
        });
    });
});
