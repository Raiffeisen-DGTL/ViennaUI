import defaultTheme from '@fcc/ui-theme';
import { readObjectByPath } from '@fcc/utils';

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
export function getPreset(preset: string, theme?: Record<string, any>): Record<string, any> {
    const result = readObjectByPath(theme, preset);

    if (result) {
        return result;
    }

    return readObjectByPath(defaultTheme, preset);
}
