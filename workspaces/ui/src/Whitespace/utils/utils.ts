import { getPresets } from 'vienna.ui-primitives';
import { Whitespace } from './types';

const preset = getPresets('whitespace', {
    size: 'size',
});

export const size = (size) => preset.size({ size });

export const parseValue = (val?: Whitespace) => {
    if (!val || typeof val !== 'string') {
        return null;
    }

    const preset = size(val);

    if (!preset) {
        return val;
    }

    return preset;
};

export const parseProperty = (cssProperty: string | string[], propValue?: Whitespace) => {
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
