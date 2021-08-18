const ICONS_PACKAGE_NAME = 'vienna.icons';
const ICONS_DEPRECATED_PACKAGE_NAME = 'vienna.deprecated-icons';

/**
 * Main function
 * @param {Object} file
 * @param {Object} api
 * @returns {*[]}
 */
function transformer(file, api) {
    const j = api.jscodeshift;
    const root = j(file.source);

    /**
     * Updates import declaration source
     */
    root.find(j.ImportDeclaration, {
        source: {
            type: 'StringLiteral',
            value: ICONS_PACKAGE_NAME,
        },
    }).replaceWith(({ node }) => {
        node.source.value = ICONS_DEPRECATED_PACKAGE_NAME;

        return node;
    });

    return root.toSource({ quote: 'single' });
}

export default transformer;
