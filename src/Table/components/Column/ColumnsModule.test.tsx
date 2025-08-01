import { ColumnsModule } from './ColumnsModule';
import { columnService, columnServiceId } from './ColumnService';
import { TableState } from '../../types';

// Костыль до обновления @testing-library/react
global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

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
    const initialState: any = {
        hiddenColumns: {
            hiddenColumns: ['1'],
            isDirty: false,
            isAllShown: false,
        },

        columns: {
            list: [{ id: '1', hidden: true }, { id: '2' }, { id: '3' }],
        },
    };

    let newState: any = {};
    let serviceId = '';

    const update = (id, state) => {
        const _newState = typeof state === 'function' ? state() : state;

        newState = { ...initialState, ..._newState };

        serviceId = id;
    };

    const getState = () => initialState;
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
        expect(newState.hiddenColumns.hiddenColumns.find((i) => i === '1')).toBeUndefined();
        expect(newState.hiddenColumns.isDirty).toBe(true);
        expect(newState.hiddenColumns.isAllShown).toBe(true);
    });

    test('Hide column', () => {
        service.hideColumn('2');

        expect(serviceId).toEqual(columnServiceId);
        expect(newState.hiddenColumns.hiddenColumns.find((i) => i === '1')).not.toBeUndefined();
        expect(newState.hiddenColumns.isDirty).toBe(true);
        expect(newState.hiddenColumns.isAllShown).toBe(false);
    });

    test('Show all columns', () => {
        service.showAllColumns();

        expect(serviceId).toEqual(columnServiceId);
        expect(newState.hiddenColumns.hiddenColumns.length).toBe(0);
        expect(newState.hiddenColumns.isAllShown).toBe(true);
        expect(newState.hiddenColumns.isDirty).toBe(true);
    });
    test('Hide all columns', () => {
        service.hideAllColumns();

        expect(serviceId).toEqual(columnServiceId);
        expect(newState.hiddenColumns.hiddenColumns.length).toBe(3);
        expect(newState.hiddenColumns.isAllShown).toBe(false);
        expect(newState.hiddenColumns.isDirty).toBe(true);
    });
});
