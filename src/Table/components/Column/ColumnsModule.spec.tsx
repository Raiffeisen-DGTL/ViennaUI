import { ColumnsModule } from './ColumnsModule';
import { columnService, columnServiceId } from './ColumnService';

const moduleParams = {
    config: {},
    child: {
        props: {
            id: '1',
            children: 'children',
            class: 'test',
        },
    },
    settings: {},
};

describe('Columns module', () => {
    test('Init config', () => {
        const config = ColumnsModule.initConfig && ColumnsModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();
        const templates = config.templates;

        expect(templates).not.toBeUndefined();
        expect(templates.get('1')).toEqual('children');
    });

    test('Init state ', () => {
        const state = ColumnsModule.initState && ColumnsModule.initState(moduleParams);
        expect(state).not.toBeUndefined();
        const columns = state.list;

        expect(Array.isArray(columns)).toBe(true);
        expect(columns[0].id).toEqual('1');
        expect(columns[0].class).toEqual('test');
        expect(columns[0].groupId).toEqual(undefined);
    });
});

describe('Column service', () => {
    const state: any = {
        columns: {
            list: [{ id: '1', hidden: true }, { id: '2' }, { id: '3' }],
        },
    };
    let newState: any = {};
    let serviceId = '';
    const update = (id, state) => {
        newState = state;
        serviceId = id;
    };

    const getState = () => state;
    const service = columnService(getState, update);

    beforeEach(() => {
        serviceId = '';
    });

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
        expect(serviceId).toEqual(columnServiceId);
        expect(newState.columns.list.find((i) => i.id === '1')).not.toBeUndefined();
    });

    test('Hide column', () => {
        service.hideColumn('2');
        expect(serviceId).toEqual(columnServiceId);
        expect(newState.columns.list.find((i) => i.id === '2').hidden).toBe(true);
    });

    test('Show all columns', () => {
        service.showAllColumns();

        expect(serviceId).toEqual(columnServiceId);
        newState.columns.list.forEach((column) => {
            expect(column.hidden).toBe(false);
        });
    });
    test('Hide all columns', () => {
        service.hideAllColumns();

        expect(serviceId).toEqual(columnServiceId);
        newState.columns.list.forEach((column) => {
            expect(column.hidden).toBe(true);
        });
    });
});
