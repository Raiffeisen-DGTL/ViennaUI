import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { getPresets } from '../Utils/styling';

const presets = getPresets('alert.buttons', {
    base: null,
    design: 'design',
});

const buildTheme = (props) => {
    return {
        button: {
            custom: presets.base(props),
            ...presets.design(props),
        },
    };
};

export const useTheme = (props) => {
    const themedContext = useContext(ThemeContext);
    const theme = useMemo(() => {
        return buildTheme({ ...props, theme: themedContext });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.design, themedContext]);
    return theme;
};
