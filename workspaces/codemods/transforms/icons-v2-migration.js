import { findOriginalNamespaces } from './utils/find-original-namespaces';
import { iconsMapper } from './mappers/icons';

const ICONS_DEPRECATED_PACKAGE_NAME = 'vienna.deprecated-icons';
const ICONS_PACKAGE_NAME = 'vienna.icons';

/**
 * Main function
 * @param {Object} file
 * @param {Object} api
 * @returns {*[]}
 */
function transformer(file, api) {
    const j = api.jscodeshift;
    const root = j(file.source);
    const originalNameSpaces = findOriginalNamespaces({
        root,
        components: Object.keys(iconsMapper),
        sourcePackage: ICONS_DEPRECATED_PACKAGE_NAME,
        jscodeshift: j,
    });

    /**
     * Updates imported icons' names
     */
    root.find(j.ImportDeclaration, {
        source: {
            type: 'StringLiteral',
            value: ICONS_DEPRECATED_PACKAGE_NAME,
        },
    }).replaceWith(({ node }) => {
        const { specifiers } = node;
        const newSpecifiers = [];

        if (Array.isArray(specifiers) && specifiers[0] && specifiers[0].type !== 'ImportNamespaceSpecifier') {
            specifiers.forEach((importSpecifier) => {
                if (importSpecifier.imported) {
                    newSpecifiers.push({
                        ...importSpecifier,
                        imported: {
                            ...importSpecifier.imported,
                            name: iconsMapper[importSpecifier.imported.name] || importSpecifier.imported.name,
                        },
                    });
                }
            });
        }
        node.specifiers = newSpecifiers.length ? newSpecifiers : specifiers;
        node.source.value = ICONS_PACKAGE_NAME;

        return node;
    });

    /**
     * Updates icons usage
     */
    originalNameSpaces.forEach((name) => {
        root.find(j.JSXOpeningElement, { name }).replaceWith(replaceIconName);
        root.find(j.JSXClosingElement, { name }).replaceWith(replaceIconName);
    });

    return root.toSource({ quote: 'single' });
}

/**
 * Replaces used icons' names
 * @param {Object} - node
 * @return {Object}
 */
function replaceIconName({ node }) {
    const {
        name: { name, property },
    } = node;

    if (name) {
        node.name = iconsMapper[name] || name;
    } else if (property) {
        node.name.property = {
            ...property,
            name: iconsMapper[property.name] || property.name,
        };
    }

    return node;
}

export default transformer;
