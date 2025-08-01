import { FooterModule } from './FooterModule';

const moduleParams = {
    child: {
        props: {
            id: '1',
            children: 'children',
            class: 'test',
        },
    },
};

describe('Footer Module', () => {
    test('Init config', () => {
        const config = FooterModule.initConfig && FooterModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();
        const templates = config.templates;

        expect(templates).not.toBeUndefined();
        expect(templates.props.children).toEqual('children');
    });
});
