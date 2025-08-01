import { css } from 'styled-components';
import { getPresets } from './getPresets';
import { systemBreakpoints } from '../responsiveness';

const theme = {
    first: {
        base: {
            background: 'gray',
        },
        color: {
            success: {
                color: 'green',
            },
        },
        size: {
            l: {
                width: '20px',
            },
            m: {
                width: '10px',
            },
        },
    },
};

const themeCustom = {
    first: {
        base: {
            color: 'white',
            margin: '10px',
        },
        color: {
            success: {
                color: 'cyan',
            },
        },
        size: {
            l: {
                width: '40px',
            },
            m: {
                width: '30px',
            },
        },
    },
};

test('getPresets()', () => {
    const { first } = theme;
    const presets = getPresets(
        first,
        'first'
    )({
        base: null,
        color: '$color',
        size: ['$size', 'm'],
    });

    // null -> default theme
    expect(presets.base({})).toBe(theme.first.base);
    // null -> ThemeProvider
    expect(presets.base({ theme: themeCustom })).toBe(themeCustom.first.base);

    // prop -> empty
    expect(presets.color({})).toStrictEqual(undefined);
    // prop -> success
    expect(presets.color({ $color: 'success' })).toBe(theme.first.color.success);
    // prop + ThemeProvider -> empty
    expect(presets.color({ theme: themeCustom })).toStrictEqual(undefined);
    // prop + ThemeProvider -> success
    expect(presets.color({ theme: themeCustom, $color: 'success' })).toBe(themeCustom.first.color.success);

    // responsive -> theme
    const cssArray = (data) => [
        css`
            ${data}
        `,
    ];
    expect(presets.size({})).toStrictEqual(cssArray(theme.first.size.m));
    // responsive + ThemeProvider -> themeCustom
    expect(presets.size({ theme: themeCustom })).toStrictEqual(cssArray(themeCustom.first.size.m));
    // responsive + prop -> theme size
    expect(presets.size({ $size: 'l' })).toStrictEqual(cssArray(theme.first.size.l));
    // responsive + prop + ThemeProvider -> themeCustom size
    expect(presets.size({ theme: themeCustom, $size: 'l' })).toStrictEqual(cssArray(themeCustom.first.size.l));

    // breakpoints
    const getCssMedia = (breakpoint, data) => css`
        @media only screen and ${breakpoint} {
            ${data}
        }
    `;
    expect(
        presets.size({
            $size: {
                l: 'm',
                m: 'm',
            },
        })
    ).toStrictEqual([
        getCssMedia(systemBreakpoints.l, theme.first.size.m),
        getCssMedia(systemBreakpoints.m, theme.first.size.m),
    ]);
    // breakpoints + ThemeProvider
    expect(
        presets.size({
            theme: themeCustom,
            $size: {
                l: 'm',
                m: 'm',
            },
        })
    ).toStrictEqual([
        getCssMedia(systemBreakpoints.l, themeCustom.first.size.m),
        getCssMedia(systemBreakpoints.m, themeCustom.first.size.m),
    ]);
    // breakpoints + media
});
