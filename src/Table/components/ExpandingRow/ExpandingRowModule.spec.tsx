import { ExpandingRowModule, DEFAULT_EXPANDER_WIDTH } from './ExpandingRowModule';
import { expandingRowService, expandingRowServiceId } from './ExpandingRowService';

const moduleParams = {
    child: {
        props: {
            children: 'children',
            allowMultiple: true,
            noPadding: true,
            onExpand: 'function',
            class: 'test',
            expandedRow: '1',
        },
    },
};

describe('ExpandingRow module', () => {
    test('Init config', () => {
        const config = ExpandingRowModule.initConfig && ExpandingRowModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();

        const template = config.template;
        expect(template).not.toBeUndefined();
        expect(template).toEqual('children');

        const settings = config.settings;
        expect(settings).not.toBeUndefined();
        expect(settings.allowMultiple).toBe(true);
        expect(settings.noPadding).toBe(true);
        expect(settings.onExpand).toEqual('function');
        expect(settings.attrs.class).toEqual('test');
        expect(settings.width).toEqual(DEFAULT_EXPANDER_WIDTH);
    });

    test('Init state ', () => {
        const state = ExpandingRowModule.initState && ExpandingRowModule.initState(moduleParams);
        expect(state).not.toBeUndefined();

        const active = state.active;
        expect(active).not.toBeUndefined();
        expect(active).toEqual('1');
    });
});

describe('ExpandingRow service', () => {
    const state: any = {
        expandingRow: {
            active: '1',
        },
    };

    const config: any = {
        expandingRow: {
            settings: {
                expandedRow: '1',
            },
        },
    };

    let newState: any = {};
    let serviceId = '';
    const update = (id, state) => {
        newState = state;
        serviceId = id;
    };

    beforeEach(() => {
        serviceId = '';
    });

    const getState = () => state;
    const service = expandingRowService(getState, update, config);

    test('getExpandingRow', () => {
        const expandingRow = service.getExpandingRow();
        expect(expandingRow).not.toBeUndefined();
        expect(expandingRow.active).toEqual('1');
    });

    test('getExpandingRowSettings', () => {
        const settings = service.getExpandingRowSettings();
        expect(settings).not.toBeUndefined();
        expect(settings.expandedRow).toEqual('1');
    });

    test('getExpandedRow', () => {
        const expandedRow = service.getExpandedRow();
        expect(expandedRow).not.toBeUndefined();
        expect(expandedRow).toEqual('1');
    });

    test('isRowExpanded', () => {
        expect(service.isRowExpanded('1')).toBe(true);
        expect(service.isRowExpanded('2')).toBe(false);
    });

    test('toggleExpandingRow', () => {
        service.toggleExpandingRow('1');
        expect(serviceId).toEqual(expandingRowServiceId);
        expect(newState.expandingRow.active).toBeUndefined();

        service.toggleExpandingRow('2');
        expect(newState.expandingRow.active).toEqual('2');
    });

    const stateMultiple: any = {
        expandingRow: {
            active: ['1'],
        },
    };

    const configMultiple: any = {
        expandingRow: {
            settings: {
                expandedRow: ['1'],
                allowMultiple: true,
            },
        },
    };

    const getStateMultiple = () => stateMultiple;
    const serviceMultiple = expandingRowService(getStateMultiple, update, configMultiple);

    test('getExpandedRow multiple', () => {
        const expandedRow = serviceMultiple.getExpandedRow();
        expect(expandedRow).not.toBeUndefined();
        expect(Array.isArray(expandedRow)).toBe(true);
        expect(expandedRow).toHaveLength(1);
        const expanded = expandedRow && expandedRow[0];
        expect(expanded).toEqual('1');
    });

    test('isRowExpanded multiple', () => {
        expect(serviceMultiple.isRowExpanded('1')).toBe(true);
        expect(serviceMultiple.isRowExpanded('2')).toBe(false);
    });

    test('toggleExpandingRow multiple', () => {
        serviceMultiple.toggleExpandingRow('1');
        expect(serviceId).toEqual(expandingRowServiceId);

        let active = newState.expandingRow.active;

        expect(Array.isArray(active)).toBe(true);
        expect(active).toHaveLength(0);

        serviceMultiple.toggleExpandingRow('2');
        active = newState.expandingRow.active;
        expect(Array.isArray(active)).toBe(true);
        expect(active).toHaveLength(2);
        expect(active[1]).toEqual('2');
    });
});
