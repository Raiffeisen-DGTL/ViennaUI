import React from 'react';
import { DEFAULT_EXPANDER_WIDTH } from '../../constants';
import { ExpandingRowModule } from './ExpandingRowModule';
import { expandingRowService, expandingRowServiceId } from './ExpandingRowService';
import { Table } from '../../Table';
import { TableConfig } from '../../types';
import { AnyObject } from '../../../Utils';

const state = {
    expandingRow: {
        active: '1',
    },
};

const config = {
    expandingRow: {
        settings: {
            expandedRow: '1',
        },
    },
} as unknown as TableConfig<unknown>;

const moduleParams = {
    child: <Table.ExpandingRow allowMultiple noPadding expandedRow={'1'} children={'children'} />,
    config: {},
    settings: {},
};

let newState: AnyObject = {};
let serviceId: string | string[] = '';
const update = (id: string | string[], state: AnyObject) => {
    newState = state;
    serviceId = id;
};

beforeEach(() => {
    serviceId = '';
});

const getState = () => state;
const service = expandingRowService(getState, update, config);

describe('ExpandingRow module and service', () => {
    test('Init config', () => {
        const config = ExpandingRowModule.initConfig && ExpandingRowModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();

        const template = config?.template;
        expect(template).not.toBeUndefined();
        expect(template).toEqual('children');

        const settings = config?.settings;
        expect(settings).not.toBeUndefined();
        expect(settings?.allowMultiple).toBe(true);
        expect(settings?.noPadding).toBe(true);
        expect(settings?.width).toEqual(DEFAULT_EXPANDER_WIDTH);
    });

    test('Init state ', () => {
        const state = ExpandingRowModule.initState && ExpandingRowModule.initState(moduleParams);
        expect(state).not.toBeUndefined();

        const active = state?.active;
        expect(active).not.toBeUndefined();
        expect(active).toEqual('1');
    });

    test('getExpandingRow', () => {
        const expandingRow = service.getExpandingRow();
        expect(expandingRow).not.toBeUndefined();
        expect(expandingRow?.active).toEqual('1');
    });

    test('getExpandingRowSettings', () => {
        const settings = service.getExpandingRowSettings();
        expect(settings).not.toBeUndefined();
        expect(settings?.expandedRow).toEqual('1');
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
        expect(newState.expandingRow.active).toBeFalsy();

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
