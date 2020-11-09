import { ColumnsModule } from './ColumnsModule';

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
