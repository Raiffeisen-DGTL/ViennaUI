import { getPreset } from '../styling';
import { Breakpoints } from './Breakpoints';
import { getStyles } from './utils';

export type ResponsiveProp<Value, B = Breakpoints> = Value | { [key in keyof B]: Value };

export interface WithMedia<T, B = Breakpoints> {
    media?: { [key in keyof B]: T };
}

export interface WithMediaStyled {
    $media?: any;
}

export function responsivePreset(propName, defaultValue) {
    return (props, context, preset) => {
        const getStyle = (value) => {
            const style = getPreset(`${context}.${preset}.${value}`, props.theme);
            return style;
        };

        return getStyles(props, context, propName, getStyle, defaultValue);
    };
}

function defaultStyle(cssProperty) {
    return (value) => {
        return `${cssProperty}: ${value};`;
    };
}

export function responsiveProp(context, propName, style) {
    return (props) => {
        const getStyle = typeof style === 'function' ? style : defaultStyle(style);

        const styles = getStyles(props, context, propName, getStyle);

        return styles;
    };
}
