import { EmptyModule } from './EmptyModule';

const moduleParams = {
    child: {
        props: {
            id: '1',
            children: 'children',
            class: 'test',
        },
    },
};

describe('EmptyModule', () => {
    test('Init config', () => {
        const config = EmptyModule.initConfig && EmptyModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();
        const templates = config.templates;

        expect(templates).not.toBeUndefined();
        expect(templates.props.children).toEqual('children');
    });
});
