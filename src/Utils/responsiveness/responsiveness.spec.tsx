import { parseMediaProp, buildStyles } from './utils';
import { getBreakpoints, setBreakpoints } from './Breakpoints';

const testBreakpoints = { smartphone: 'max-width: 500px', tablet: 'min-width: 1024px', laptop: 'min-width: 1920px' };

describe('Responsiveness', () => {
    test('breakpoints', () => {
        setBreakpoints(testBreakpoints);

        const newBreakpoints = getBreakpoints();
        expect(newBreakpoints).toEqual(testBreakpoints);
    });

    test('parseMediaProp', () => {
        const testMediaProp = {
            base: {
                prop1: 'value1',
                prop2: 'value2',
            },
            tablet: {
                prop1: 'value3',
                prop2: 'value4',
            },
        };

        const mediaForProp1 = parseMediaProp(testMediaProp, 'prop1');
        const expectedProp1 = { base: 'value1', tablet: 'value3' };
        Object.keys(mediaForProp1).forEach((key) => {
            expect(mediaForProp1[key]).toEqual(expectedProp1[key]);
        });

        const mediaForProp2 = parseMediaProp(testMediaProp, 'prop2');
        const expectedProp2 = { base: 'value2', tablet: 'value4' };
        Object.keys(mediaForProp2).forEach((key) => {
            expect(mediaForProp2[key]).toEqual(expectedProp2[key]);
        });
    });

    test('buildStyles', () => {
        const mediaConfig = { base: 's', smartphone: 'm', tablet: 'l', laptop: 'xl' };
        const theme = { s: 'style1', m: 'style2', l: 'style3', xl: 'style4' };
        const getStyles = (style) => theme[style];

        const expectedStyles = {
            base: 'style1',
            'max-width: 500px': 'style2',
            'min-width: 1024px': 'style3',
            'min-width: 1920px': 'style4',
        };

        const styles = buildStyles(mediaConfig, testBreakpoints, getStyles);
        expect(styles).toEqual(expectedStyles);
    });
});
