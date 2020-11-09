import { SelectRowModule, SELECT_ALL } from './SelectRowModule';
import { selectRowService } from './SelectRowService';

describe('SelectRow module', () => {
    const moduleParams = {
        settings: {
            onSelect: 'onSelect',
            disableSelectAll: false,
            selected: [1],
        },
    };

    const selectAllParams = {
        child: {
            props: {
                children: 'children',
            },
        },
    };

    test('Init config', () => {
        const baseConfig = SelectRowModule.initConfig && SelectRowModule.initConfig(moduleParams);

        const config =
            SelectRowModule.initConfig &&
            SelectRowModule.initConfig({ ...selectAllParams, ...moduleParams, config: baseConfig });

        expect(config).not.toBeUndefined();
        expect(config.onSelect).toEqual('onSelect');
        expect(config.disableSelectAll).toEqual(false);

        const selectAll = config.selectAll;
        expect(selectAll).not.toBeUndefined();
        expect(selectAll.props?.children).toEqual('children');
    });

    test('Init state ', () => {
        const state = SelectRowModule.initState && SelectRowModule.initState(moduleParams);
        expect(state).not.toBeUndefined();

        const selected = state.selected;
        expect(selected).not.toBeUndefined();
        expect(Array.isArray(selected)).toBe(true);
        expect(selected[0]).toEqual(1);
    });
});

describe('SelectRow service', () => {
    const state: any = {
        selectRow: {
            selected: ['1', '2'],
        },
    };

    const data = ['0', '1', '2', '3'];

    let newState: any = {};
    const update = (state) => {
        newState = state;
    };

    const service = selectRowService(state, update, data);

    test('getSelectedRows', () => {
        const selected = service.getSelectedRows();
        expect(selected).not.toBeUndefined();
        expect(Array.isArray(selected)).toBe(true);

        const selectedEl = selected && selected[0];
        expect(selectedEl).toEqual('1');
    });

    test('getData', () => {
        const data = service.getData();
        expect(data).not.toBeUndefined();
        expect(Array.isArray(data)).toBe(true);
        expect(data).toHaveLength(4);
        expect(data[1]).toEqual('1');
    });

    test('isRowSelected', () => {
        const selected = service.isRowSelected('2');
        expect(selected).toBe(true);
    });

    test('selectRow', () => {
        const selected = service.selectRow('3');

        expect(Array.isArray(selected)).toBe(true);
        expect(selected).toHaveLength(3);
        expect(selected[0]).toEqual('1');
        expect(selected[2]).toEqual('3');
    });

    test('deselectRow', () => {
        const selected = service.deselectRow('2');

        expect(Array.isArray(selected)).toBe(true);
        expect(selected).toHaveLength(2);
        expect(selected[0]).toEqual('1');
    });

    test('toggleSelectRow', () => {
        // select '2'
        service.toggleSelectRow('2', true);
        expect(newState.selectRow.selected).not.toBeUndefined();
        let selected = newState.selectRow.selected;

        expect(Array.isArray(selected)).toBe(true);
        expect(selected.includes('2')).toBe(true);

        // deselect 3
        service.toggleSelectRow('3', false);
        expect(newState.selectRow.selected).not.toBeUndefined();
        selected = newState.selectRow.selected;

        expect(Array.isArray(selected)).toBe(true);
        expect(selected.includes('3')).toBe(false);

        // select all
        service.toggleSelectRow(SELECT_ALL, true);
        expect(newState.selectRow.selected).not.toBeUndefined();
        selected = newState.selectRow.selected;

        expect(Array.isArray(selected)).toBe(true);
        expect(selected).toHaveLength(4);
        expect(selected[0]).toEqual('0');
        expect(selected[3]).toEqual('3');

        // deselect all
        service.toggleSelectRow(SELECT_ALL, false);
        expect(newState.selectRow.selected).not.toBeUndefined();
        selected = newState.selectRow.selected;

        expect(Array.isArray(selected)).toBe(true);
        expect(selected).toHaveLength(0);
    });

    test('toggleSelectGroup', () => {
        // clear selection state;
        state.selectRow.selected = [];

        // select group
        const group = { isGroupTitle: true, id: 'test', filter: (i) => i > 2 };
        service.toggleSelectGroup(group, true);

        expect(newState.selectRow.selected).not.toBeUndefined();
        let selected = newState.selectRow.selected;

        expect(selected).toHaveLength(2);
        expect(selected[0]).toEqual('test');
        expect(selected[1]).toEqual('3');

        // deselect group
        service.toggleSelectGroup(group, false);
        expect(newState.selectRow.selected).not.toBeUndefined();
        selected = newState.selectRow.selected;

        expect(selected).toHaveLength(0);
    });

    test('selectAll', () => {
        service.selectAll(['0', '1', '2']);
        expect(newState.selectRow.selected).not.toBeUndefined();
        const selected = newState.selectRow.selected;

        expect(Array.isArray(selected)).toBe(true);
        expect(selected).toHaveLength(3);
        expect(selected[0]).toEqual('0');
        expect(selected[1]).toEqual('1');
        expect(selected[2]).toEqual('2');
    });
});
