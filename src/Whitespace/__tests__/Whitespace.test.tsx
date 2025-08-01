import { whitespace } from 'vienna.ui-theme';
import { size, withWhitespace } from '../utils';

export const parseValue = (val) => {
    if (!val || typeof val !== 'string') {
        return null;
    }

    const preset = size(val);

    if (!preset) {
        return val;
    }

    return preset;
};

export const parseProperty = (cssProperty: string | string[], propValue) => {
    const value = parseValue(propValue);

    if (!value) {
        return null;
    }

    if (Array.isArray(cssProperty)) {
        return cssProperty
            .map((prop) => {
                return `${prop}:${value};`;
            })
            .join('');
    }

    return `${cssProperty}:${value};`;
};

// This indicates that size presets in whitespace.yaml goes up to s16
const MAX_WHITESPACE_SIZE_ID = 16;

describe('Whitespaces', () => {
    describe('size', () => {
        it(`should calculate correct s1..s${MAX_WHITESPACE_SIZE_ID} params`, () => {
            // Currently our sizes are calculated by multipling token number to 4px. So s2 == 8px; If this changes in future this test should be rewritten
            const SIZE_BASE = 4;

            for (let i = 1; i <= MAX_WHITESPACE_SIZE_ID; i++) {
                expect(size(`s${i}`)).toEqual(`${i * SIZE_BASE}px`);
            }
        });

        it('should to be invalid params', () => {
            expect(size('s0')).toBeUndefined();
            expect(size('test')).toBeUndefined();
            expect(size(42)).toBeUndefined();
            expect(size({ testObject: 42 })).toBeUndefined();
            expect(size('s1.s2')).toBeUndefined();
        });
    });

    describe('parseValue', () => {
        it('should calculate correct presets values from size string', () => {
            expect(parseValue('s1')).toEqual('4px');
            expect(parseValue('s5')).toEqual('20px');
        });

        it('should calculate correct css string values', () => {
            expect(parseValue('2rem')).toEqual('2rem');
            expect(parseValue('-4em')).toEqual('-4em');
            expect(parseValue('-20px')).toEqual('-20px');
        });

        it('should calculate invalid values', () => {
            expect(parseValue('')).toBeNull();
            expect(parseValue(undefined)).toBeNull();
        });
    });

    describe('parseProperty', () => {
        it('should calculate correct presets values for margin', () => {
            expect(parseProperty('margin', 's2')).toEqual('margin:8px;');
            expect(parseProperty('margin', 's3')).toEqual('margin:12px;');
        });

        it('should calculate correct css string values for padding', () => {
            expect(parseProperty('padding', '2rem')).toEqual('padding:2rem;');
            expect(parseProperty('padding', '1vh')).toEqual('padding:1vh;');
        });

        it('should calculate correct multiple properties', () => {
            expect(parseProperty(['margin-top', 'margin-bottom'], 's2')).toEqual('margin-top:8px;margin-bottom:8px;');
            expect(parseProperty(['margin-top', 'margin-bottom'], '2em')).toEqual('margin-top:2em;margin-bottom:2em;');
        });
    });

    describe('useWhitespace', () => {
        const getWhitespaceValue = <T,>(arr: T[][]) => {
            return arr
                .filter((item) => item.some((el) => Array.isArray(el)))
                .join('')
                .replace(',', '');
        };

        it('should calculate correct simple properties with useWhitespace', () => {
            const propertiesMap = {
                // full names
                $margin: 'margin',
                $marginTop: 'margin-top',
                $marginBottom: 'margin-bottom',
                $marginLeft: 'margin-left',
                $marginRight: 'margin-right',
                $padding: 'padding',
                $paddingTop: 'padding-top',
                $paddingBottom: 'padding-bottom',
                $paddingLeft: 'padding-left',
                $paddingRight: 'padding-right',

                // aliases
                $m: 'margin',
                $mt: 'margin-top',
                $mb: 'margin-bottom',
                $ml: 'margin-left',
                $mr: 'margin-right',
                $p: 'padding',
                $pt: 'padding-top',
                $pb: 'padding-bottom',
                $pl: 'padding-left',
                $pr: 'padding-right',
            };

            // setting one property at a time to 's1', validate the css property name with 4px value
            Object.entries(propertiesMap).forEach(([key, value]) => {
                const props = { [key]: 's1' };
                expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')(props))).toEqual(`${value}: 4px;`);
            });
        });

        it('should calculate correct complex margins', () => {
            // horizontal
            let expectedStyle = 'margin-left: 4px;margin-right: 4px;';
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $mx: 's1' }))).toEqual(expectedStyle);
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $marginHorizontal: 's1' }))).toEqual(
                expectedStyle
            );

            // vertical
            expectedStyle = 'margin-top: 4px;margin-bottom: 4px;';
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $my: 's1' }))).toEqual(expectedStyle);
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $marginVertical: 's1' }))).toEqual(
                expectedStyle
            );
        });

        it('should calculate correct complex paddings', () => {
            // horizontal
            let expectedStyle = 'padding-left: 4px;padding-right: 4px;';
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $px: 's1' }))).toEqual(expectedStyle);
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $paddingHorizontal: 's1' }))).toEqual(
                expectedStyle
            );

            // vertical
            expectedStyle = 'padding-top: 4px;padding-bottom: 4px;';
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $py: 's1' }))).toEqual(expectedStyle);
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $paddingVertical: 's1' }))).toEqual(
                expectedStyle
            );
        });

        it('should calculate correct multiple props', () => {
            let expectedStyle = 'padding-top: 4px;padding-bottom: 8px;';
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $pt: 's1', $pb: 's2' }))).toEqual(
                expectedStyle
            );

            expectedStyle = 'margin-top: 4px;padding-top: 8px;';
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $mt: 's1', $pt: 's2' }))).toEqual(
                expectedStyle
            );

            expectedStyle = 'margin-top: 8px;margin-bottom: 8px;padding: 12px;';
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $my: 's2', $p: 's3' }))).toEqual(
                expectedStyle
            );

            expectedStyle = 'margin: 8px;padding-left: 12px;padding-right: 12px;';
            expect(getWhitespaceValue(withWhitespace(whitespace, 'whitespace')({ $m: 's2', $px: 's3' }))).toEqual(
                expectedStyle
            );
        });
    });
});
