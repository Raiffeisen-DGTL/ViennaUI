import defaultTheme from 'vienna.ui-theme';
import { readObjectByPath } from 'vienna.utils';

export { ThemeProvider } from 'styled-components';

/**
 * Function returns preset from theme by path.
 *
 * Function will check the existance of the path in the custome thme first. If preset doesn't exist in the custom theme, it will return it from the default theme.
 *
 * @param {string} preset Preset path
 * @param {Record<string, any>} theme Optional custom theme
 *
 * @return {Record<string, any>}
 */
function getPreset(preset: string, theme?: Record<string, any>): Record<string, any> {
    const result = readObjectByPath(theme, preset);

    if (result) {
        return result;
    }

    return readObjectByPath(defaultTheme, preset);
}

/**
 * Function constructs the full path for preset.
 *
 * Returns string that looks like `${context}.${presetName}.${props[param]}
 *
 * @param {Record<string, any>} props Array of React props
 * @param {string} context Context for the preset look up, usually componet name will be used as a context.
 * @param {string} presetName Name of the preset.
 * @param {Function|string|null} param Parameterized part of preset path. Value can be one of the following types:
 *     - Function. Callback function that accepts params and returns the complete path.
 *     - string. Will be used as a key in props array to get the value by,
 *     - null. Indicated that preset doesn't have the parameterized part. Preset path will be equal to `${context}.${presetName}`.
 *
 * @return {string}
 */
function buildPath(
    props: Record<string, any>,
    context: string,
    presetName: string,
    param: Function | string | null
): string {
    if (typeof param === 'function') {
        return param(props);
    }

    return `${context}.${presetName}${param ? `.${props[param]}` : ''}`;
}

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
export const getPresets = (context: string, presets: Record<string, any>): Record<string, (props) => any> => {
    return Object.assign(
        {},
        ...Object.keys(presets).map((preset: string) => ({
            [preset]: (props: Record<string, any>): Record<string, any> => {
                return getPreset(buildPath(props, context, preset, presets[preset]), props.theme);
            },
        }))
    );
};
