import { GroupByModule } from './GroupByModule';
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
                },
            },
        };

        const config = GroupByModule.initConfig && GroupByModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();
        expect(Array.isArray(config.options)).toBe(true);
        const { id, name, groups } = config.options[0];

        expect(id).toEqual('default');
        expect(name).toEqual('default');

        expect(groups).not.toBeUndefined();
        expect(Array.isArray(groups)).toBe(true);
        expect(groups).toHaveLength(1);
        expect(groups[0].id).toEqual('1');
        expect(groups[0].title).toEqual('test');
        expect(groups[0].filter).toEqual('filter');
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
        expect(Array.isArray(config.options)).toBe(true);
        const { groups } = config.options[0];

        expect(groups).not.toBeUndefined();
        expect(Array.isArray(groups)).toBe(true);
        expect(groups).toHaveLength(2);
        expect(groups[0].id).toEqual('1');
        expect(groups[0].title).toEqual('test');

        expect(groups[1].id).toEqual('2');
        expect(groups[1].title).toEqual('test 2');
        expect(groups[1].filter).toEqual('filter');
    });

    test('Init state', () => {
        const moduleParams = {
            config: undefined,
            child: {
                props: {
                    id: '1',
                    title: 'test',
                    filter: 'filter',
                },
            },
        };

        const state = GroupByModule.initState && GroupByModule.initState(moduleParams);
        expect(state).not.toBeUndefined();
        expect(state.id).toEqual('default');
    });
});

describe('GroupBy service', () => {
    const state: any = {
        groupBy: {
            id: 'default',
        },
    };

    const config: any = {
        groupBy: {
            options: [
                {
                    id: 'default',
                    name: 'default',
                    groups: [
                        { id: '1', title: 'Group 1', filter: () => 'Group 1' },
                        { id: '2', title: 'Group 2', filter: () => 'Group 2' },
                        { id: '3', title: 'Group 3', filter: () => 'Group 3' },
                    ],
                },
            ],
        },
    };

    let newState: any = {};
    let serviceId = '';
    const update = (id, state) => {
        newState = state;
        serviceId = id;
    };

    const service = groupByService(state, update, config);

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
});
