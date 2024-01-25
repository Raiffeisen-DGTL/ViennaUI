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
export function buildPath(
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
