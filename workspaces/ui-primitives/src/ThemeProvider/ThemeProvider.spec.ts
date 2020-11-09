import { getPresets } from './ThemeProvider';

const testTheme = {
    component: {
        size: 10,
        design: {
            primary: 'primary',
        },
        hover: {
            primary: 'hover',
        },
        complex: {
            secondary: {
                fontSize: 11,
            },
        },
    },
};

const testProps = {
    theme: testTheme,
    design: 'primary',
    complex: 'secondary',
};

describe('Theme Provider', () => {
    test('generic preset', () => {
        const theme = getPresets('component', { design: 'design' });
        expect(theme.design(testProps)).toBe('primary');
    });

    test('preset with no props parameter', () => {
        const theme = getPresets('component', { size: null });
        expect(theme.size(testProps)).toBe(10);
    });

    test(`"preset·name·doesn't·match·prop·name"`, () => {
        const theme = getPresets('component', { hover: 'design' });
        expect(theme.hover(testProps)).toBe('hover');
    });

    test('callback functions', () => {
        const theme = getPresets('component', {
            complex: (props: Record<string, any>) => `component.complex.${props.complex}.fontSize`,
        });
        expect(theme.complex(testProps)).toBe(11);
    });
});
