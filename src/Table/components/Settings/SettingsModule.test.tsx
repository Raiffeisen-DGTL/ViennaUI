import { SettingsModule } from './SettingsModule';

const moduleParams = {
    child: {
        props: {
            id: '1',
            children: 'children',
        },
    },
};

describe('Footer Module', () => {
    test('Init config', () => {
        const config = SettingsModule.initConfig && SettingsModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();
        const template = config.template;

        expect(template).not.toBeUndefined();
        expect(template.props.children).toEqual('children');
    });
});
