import { buildPath, getPreset } from '.';

const responsive = (context, preset, prop) => {
    return (props: Record<string, any>): Record<string, any> => {
        return prop(props, context, preset);
    };
};

const nonResponsive = (context, preset, prop) => {
    return (props: Record<string, any>): Record<string, any> => {
        return getPreset(buildPath(props, context, preset, prop), props.theme);
    };
};

/**
 * Returns the presets dictionary where each element is a function, that can be used inside styled components css part.
 * Function accepts presets object and for each key creates an entry in the result object with the same key
 * and function that returns themed preset in the value.
 *
 * @param {string} context Context for the preset look up, usually componet name will be used as context
 * @param {Record<string, any>} presets Presets object
 *
 * @return {Record<string, Function>}
 */
export const getPresets = <K extends string>(context: string, presets: Record<K, any>) => {
    return Object.fromEntries(
        Object.entries(presets).map(([preset, prop]) => {
            const getProp = typeof prop === 'function' ? responsive : nonResponsive;
            return [preset, getProp(context, preset, prop)];
        })
    ) as Record<K, (props) => any>;
};
