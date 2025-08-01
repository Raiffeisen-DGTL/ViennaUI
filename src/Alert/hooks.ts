import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { alert } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { AlertThemeProps } from './Alert';
import { ThemePresets } from '../index';

const presets = getPresets(
    alert.buttons,
    'alert.buttons'
)({
    base: null,
    design: 'design',
});

const buildTheme = (props: AlertThemeProps) => {
    return {
        button: {
            base: presets.base(props) as ThemePresets,
            ...presets.design(props),
        },
    } as ThemePresets;
};

export const useTheme = (props: AlertThemeProps) => {
    const themedContext = useContext(ThemeContext);
    const theme = useMemo(() => {
        return buildTheme({ ...props, theme: themedContext });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.design, themedContext]);
    return theme;
};
