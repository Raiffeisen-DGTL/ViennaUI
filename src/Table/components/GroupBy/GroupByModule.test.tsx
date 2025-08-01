import { GroupByModule, GroupByOption } from './GroupByModule';
import { groupByService, groupByServiceId } from './GroupByService';

describe('GroupBy module', () => {
    test('Init config', () => {
        const moduleParams = {
            config: undefined,
            child: {
                props: {
                    id: '1',
                    title: 'test',
                    filter: 'filter',
                    expandable: true,
                    expandedDefault: false,
                    onExpand: console.log,
                },
            },
        };

        const config = GroupByModule.initConfig && GroupByModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();
        expect(Array.isArray(config?.options)).toBe(true);
        const { id, name, groups } = config?.options[0] as GroupByOption;

        expect(id).toEqual('default');
        expect(name).toEqual('default');

        expect(groups).not.toBeUndefined();
        expect(Array.isArray(groups)).toBe(true);
        expect(groups).toHaveLength(1);
        expect(groups[0].id).toEqual('1');
        expect(groups[0].title).toEqual('test');
        expect(groups[0].filter).toEqual('filter');
        expect(groups[0].expandable).toEqual(true);
        expect(groups[0].expandedDefault).toBeUndefined();
        expect(groups[0].onExpand).toEqual(console.log);
    });

    test('Init config w/ group', () => {
        const moduleParams = {
            config: {
                options: [
                    {
                        id: 'default',
                        name: 'default',
                        groups: [
                            {
                                id: '1',
                                title: 'test',
                                filter: 'filter',
                            },
                        ],
                    },
                ],
            },
            child: {
                props: {
                    id: '2',
                    title: 'test 2',
                    filter: 'filter',
                },
            },
        };

        const config = GroupByModule.initConfig && GroupByModule.initConfig(moduleParams);
        expect(config).not.toBeUndefined();
        expect(Array.isArray(config?.options)).toBe(true);
        const { groups } = config?.options[0] as GroupByOption;

        expect(groups).not.toBeUndefined();
        expect(Array.isArray(groups)).toBe(true);
        expect(groups).toHaveLength(2);
        expect(groups[0].id).toEqual('1');
        expect(groups[0].title).toEqual('test');

        expect(groups[1].id).toEqual('2');
        expect(groups[1].title).toEqual('test 2');
        expect(groups[1].filter).toEqual('filter');
    });

    test('Init state: expanded', () => {
        const moduleParams = {
            config: undefined,
            child: {
                props: {
                    id: '1',
                    title: 'test',
                    filter: 'filter',
                    expandable: true,
                },
            },
        };

        const state = GroupByModule.initState && GroupByModule.initState(moduleParams);
        expect(state).not.toBeUndefined();
        expect(state?.id).toEqual('default');
        expect(state?.expanded).toEqual(['1']);
    });

    test('Init state: as default not expanded', () => {
        const moduleParams = {
            config: undefined,
            child: {
                props: {
                    id: '1',
                    title: 'test',
                    filter: 'filter',
                    expandable: true,
                    expandedDefault: false,
                },
            },
        };

        const state = GroupByModule.initState && GroupByModule.initState(moduleParams);
        expect(state).not.toBeUndefined();
        expect(state?.id).toEqual('default');
        expect(state?.expanded).toEqual([]);
    });
});

describe('GroupBy service', () => {
    const state: any = {
        groupBy: {
            id: 'default',
            expanded: ['1', '2', '3'],
        },
    };

    const config: any = {
        groupBy: {
            options: [
                {
                    id: 'default',
                    name: 'default',
                    groups: [
                        { id: '1', title: 'Group 1', filter: () => 'Group 1', expandable: true },
                        { id: '2', title: 'Group 2', filter: () => 'Group 2', expandable: true },
                        { id: '3', title: 'Group 3', filter: () => 'Group 3', expandable: true },
                    ],
                },
            ],
        },
    };

    let newState: any = {};
    let serviceId = '';
    const update = (id, upd) => {
        serviceId = id;

        if (typeof upd === 'function') {
            newState = upd(state);
        } else {
            newState = upd;
        }
    };

    const getState = () => state;
    const service = groupByService(getState, update, config);

    test('GetGroupBy', () => {
        const groupBy = service.getGroupBy();

        expect(groupBy?.id).toEqual('default');
        expect(groupBy?.name).toEqual('default');

        expect(Array.isArray(groupBy?.groups)).toBe(true);
        expect(groupBy?.groups).toHaveLength(3);

        const group = groupBy?.groups?.find((i) => i.id === '1');
        expect(group).not.toBeUndefined();
        expect(group?.title).toEqual('Group 1');
    });

    test('SetGroupBy', () => {
        service.setGroupBy('group1');
        expect(serviceId).toEqual(groupByServiceId);
        const newGroupBy = newState.groupBy;

        expect(newGroupBy).not.toBeUndefined();
        expect(newGroupBy.id).toEqual('group1');
    });

    test('SetGroupByOptions', () => {
        const options = [
            {
                id: 'default',
                name: 'default',
                groups: [
                    { id: '1', title: 'Group 1', filter: () => 'Group 1' },
                    { id: '2', title: 'Group 2', filter: () => 'Group 2' },
                    { id: '3', title: 'Group 3', filter: () => 'Group 3' },
                ],
            },
            {
                id: 'option1',
                name: 'Option 1',
                groups: [
                    { id: '1', title: 'Group 4', filter: () => 'Group 4' },
                    { id: '2', title: 'Group 5', filter: () => 'Group 5' },
                ],
            },
        ];
        service.setGroupByOptions(options);

        const groupByOptions = config.groupBy?.options;

        expect(groupByOptions).not.toBeUndefined();
        expect(groupByOptions).toHaveLength(2);

        expect(groupByOptions[0].id).toEqual('default');
        expect(groupByOptions[0].name).toEqual('default');

        expect(groupByOptions[1].id).toEqual('option1');
        expect(groupByOptions[1].name).toEqual('Option 1');
    });

    test('getExpandingGroup', () => {
        const group = service.getExpandingGroup('1');

        expect(group).not.toBeUndefined();
        expect(group?.title).toEqual('Group 1');
    });

    test('isGroupExpanded', () => {
        const result = service.isGroupExpanded('1');

        expect(result).toBeTruthy();
    });

    test('toggleExpandingGroup', () => {
        service.toggleExpandingGroup('1');

        expect(newState.groupBy.expanded).toEqual(['2', '3']);
    });
});
