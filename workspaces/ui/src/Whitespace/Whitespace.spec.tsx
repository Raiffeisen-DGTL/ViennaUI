import { size, parseValue, parseProperty, useWhitespace } from './utils';

// This indicates that size presets in whitespace.yaml goes up to s16
const MAX_WHITESPACE_SIZE_ID = 16;

describe('size', () => {
    test(`s1..s${MAX_WHITESPACE_SIZE_ID} params`, () => {
        // Currently our sizes are aclculated by multipling token number to 4px. So s2 == 8px; If this changes in future this test should be rewritten
        const SIZE_BASE = 4;

        for (let i = 1; i <= MAX_WHITESPACE_SIZE_ID; i++) {
            expect(size(`s${i}`)).toEqual(`${i * SIZE_BASE}px`);
        }
    });

    test('Invalid params', () => {
        expect(size('s0')).toBeNull();
        expect(size('test')).toBeNull();
        expect(size(42)).toBeNull();
        expect(size({ testObject: 42 })).toBeNull();
        expect(size('s1.s2')).toBeNull();
    });
});

describe('parseValue', () => {
    test('presets values', () => {
        expect(parseValue('s1')).toEqual('4px');
        expect(parseValue('s5')).toEqual('20px');
    });

    test('css string values', () => {
        expect(parseValue('2rem')).toEqual('2rem');
        expect(parseValue('-4em')).toEqual('-4em');
        expect(parseValue('-20px')).toEqual('-20px');
    });

    test('invalid values', () => {
        expect(parseValue('')).toBeNull();
        expect(parseValue(undefined)).toBeNull();
    });
});

describe('parseProperty', () => {
    test('presets values', () => {
        expect(parseProperty('margin', 's2')).toEqual('margin:8px;');
        expect(parseProperty('margin', 's3')).toEqual('margin:12px;');
    });

    test('css string values', () => {
        expect(parseProperty('padding', '2rem')).toEqual('padding:2rem;');
        expect(parseProperty('padding', '1vh')).toEqual('padding:1vh;');
    });

    test('multiple properties', () => {
        expect(parseProperty(['margin-top', 'margin-bottom'], 's2')).toEqual('margin-top:8px;margin-bottom:8px;');
        expect(parseProperty(['margin-top', 'margin-bottom'], '2em')).toEqual('margin-top:2em;margin-bottom:2em;');
    });
});

describe('useWhitespace', () => {
    test('simple properties', () => {
        const propertiesMap = {
            // full names
            margin: 'margin',
            marginTop: 'margin-top',
            marginBottom: 'margin-bottom',
            marginLeft: 'margin-left',
            marginRight: 'margin-right',
            padding: 'padding',
            paddingTop: 'padding-top',
            paddingBottom: 'padding-bottom',
            paddingLeft: 'padding-left',
            paddingRight: 'padding-right',

            // aliases
            m: 'margin',
            mt: 'margin-top',
            mb: 'margin-bottom',
            ml: 'margin-left',
            mr: 'margin-right',
            p: 'padding',
            pt: 'padding-top',
            pb: 'padding-bottom',
            pl: 'padding-left',
            pr: 'padding-right',
        };

        // setting one property at a time to 's1', validate the css property name with 4px value
        Object.entries(propertiesMap).forEach(([key, value]) => {
            const props = { [key]: 's1' };
            expect(useWhitespace(props)).toEqual(`${value}:4px;`);
        });
    });

    test('complex margins', () => {
        // horizontal
        let expectedStyle = 'margin-left:4px;margin-right:4px;';
        expect(useWhitespace({ mx: 's1' })).toEqual(expectedStyle);
        expect(useWhitespace({ marginHorizontal: 's1' })).toEqual(expectedStyle);

        // vertical
        expectedStyle = 'margin-top:4px;margin-bottom:4px;';
        expect(useWhitespace({ my: 's1' })).toEqual(expectedStyle);
        expect(useWhitespace({ marginVertical: 's1' })).toEqual(expectedStyle);
    });

    test('complex paddings', () => {
        // horizontal
        let expectedStyle = 'padding-left:4px;padding-right:4px;';
        expect(useWhitespace({ px: 's1' })).toEqual(expectedStyle);
        expect(useWhitespace({ paddingHorizontal: 's1' })).toEqual(expectedStyle);

        // vertical
        expectedStyle = 'padding-top:4px;padding-bottom:4px;';
        expect(useWhitespace({ py: 's1' })).toEqual(expectedStyle);
        expect(useWhitespace({ paddingVertical: 's1' })).toEqual(expectedStyle);
    });

    test('multiple props', () => {
        let expectedStyle = 'padding-top:4px;padding-bottom:8px;';
        expect(useWhitespace({ pt: 's1', pb: 's2' })).toEqual(expectedStyle);

        expectedStyle = 'margin-top:4px;padding-top:8px;';
        expect(useWhitespace({ mt: 's1', pt: 's2' })).toEqual(expectedStyle);

        expectedStyle = 'margin-top:8px;margin-bottom:8px;padding:12px;';
        expect(useWhitespace({ my: 's2', p: 's3' })).toEqual(expectedStyle);

        expectedStyle = 'margin:8px;padding-left:12px;padding-right:12px;';
        expect(useWhitespace({ m: 's2', px: 's3' })).toEqual(expectedStyle);
    });
});

describe('Whitespace', () => {});
