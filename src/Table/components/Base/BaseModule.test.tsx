import { BaseModule } from './BaseModule';

describe('Base module', () => {
    test('Init config', () => {
        const moduleParams = {
            settings: {
                noHeader: true,
                noRowDivider: true,
                maxHeight: true,
                size: true,
                valign: 'top',
                incorrectProp: true,
            },
        };

        const expected = {
            noHeader: true,
            noRowDivider: true,
            maxHeight: true,
            size: true,
            valign: 'top',
        };

        const config = BaseModule.initConfig && BaseModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();
        expect(config.settings).not.toBeUndefined();

        for (const [key, value] of Object.entries(expected)) {
            expect(config.settings[key]).toEqual(value);
        }

        expect(config.settings.incorrectProp).toBeUndefined();
    });
});
