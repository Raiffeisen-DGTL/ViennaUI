import { ActionsColumnModule } from './ActionsColumnModule';

describe('ActionsColumn module', () => {
    test('Init config', () => {
        const moduleParams = {
            child: {
                props: {
                    id: '1',
                    children: 'children',
                    class: 'test',
                },
            },
        };

        const expected = {
            id: '1',
            children: 'children',
            class: 'test',
        };

        const config = ActionsColumnModule.initConfig && ActionsColumnModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();

        for (const [key, value] of Object.entries(expected)) {
            expect(config[key]).toEqual(value);
        }
    });
});
