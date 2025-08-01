import React from 'react';
import { ColumnGroupConfig, ColumnGroupModule } from './ColumnGroupModule';
import { columnGroupService } from './ColumnGroupService';
import { TableConfig } from '../../types';
import { Table } from '../../index';

const moduleParams = {
    config: {},
    child: <Table.GroupBy id={'1'} title={'Group'} filter={(item) => item.position === 'Software Engineer'} />,
    settings: {
        columns: ['1', '2', '3'],
    },
};

describe('Column Group module', () => {
    test('Init config ', () => {
        const config = ColumnGroupModule.initConfig && ColumnGroupModule.initConfig(moduleParams);
        expect(config).not.toBeUndefined();
        const groups = (config as ColumnGroupConfig).groups;

        expect(Array.isArray(groups)).toBe(true);
        expect(groups[0].id).toEqual('1');
        expect(groups[0].title).toEqual('Group');
        expect(groups[0].columns).toHaveLength(3);
    });
});

describe('Column Group service', () => {
    const state = {
        columns: {
            list: [{ id: '1', hidden: true }, { id: '2' }, { id: '3' }, { id: '4' }],
        },
    };

    const config = {
        columnGroup: {
            groups: [
                { id: 'g1', columns: ['1', '2'] },
                { id: 'g2', columns: ['3', '4'] },
            ],
        },
    };

    const getState = () => state;
    const service = columnGroupService(getState, () => null, config as TableConfig<unknown>);

    test('columnGroupSpan', () => {
        const group1 = service.columnGroupSpan('g1');
        expect(group1).toEqual(1);

        const group2 = service.columnGroupSpan('g2');
        expect(group2).toEqual(2);
    });
});
