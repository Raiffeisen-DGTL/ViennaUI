import { ColumnGroupModule } from './ColumnGroupModule';
import { columnGroupService } from './ColumnGroupService';

const moduleParams = {
    config: {},
    child: {
        props: {
            id: '1',
            title: 'Group',
            color: 'sochi10',
        },
    },
    settings: {
        columns: ['1', '2', '3'],
    },
};

describe('Column Group module', () => {
    test('Init config ', () => {
        const config = ColumnGroupModule.initConfig && ColumnGroupModule.initConfig(moduleParams);
        expect(config).not.toBeUndefined();
        const groups = config.groups;

        expect(Array.isArray(groups)).toBe(true);
        expect(groups[0].id).toEqual('1');
        expect(groups[0].title).toEqual('Group');
        expect(groups[0].color).toEqual('sochi10');
        expect(groups[0].columns).toHaveLength(3);
    });
});

describe('Column Group service', () => {
    const state: any = {
        columns: {
            list: [{ id: '1', hidden: true }, { id: '2' }, { id: '3' }, { id: '4' }],
        },
    };

    const config: any = {
        columnGroup: {
            groups: [
                { id: 'g1', columns: ['1', '2'] },
                { id: 'g2', columns: ['3', '4'] },
            ],
        },
    };

    const getState = () => state;
    const service = columnGroupService(getState, () => null, config);

    test('columnGroupSpan', () => {
        const group1 = service.columnGroupSpan('g1');
        expect(group1).toEqual(1);

        const group2 = service.columnGroupSpan('g2');
        expect(group2).toEqual(2);
    });
});
