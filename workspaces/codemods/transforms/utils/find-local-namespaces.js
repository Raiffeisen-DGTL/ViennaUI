/**
 * Finds local namespaces for importing of components from source package
 * @param {Object} root
 * @param {{Object}} jscodeshift
 * @param {Array} components
 * @param {string} sourcePackage
 * @returns {[]}
 */
export const findLocalNameSpaces = ({ root, jscodeshift, components, sourcePackage }) => {
    /**
     * Finds import declarations for target component import
     */
    const importDeclarations = root.find(jscodeshift.ImportDeclaration, {
        source: {
            type: 'StringLiteral',
            value: sourcePackage,
        },
    });

    const localNameSpaces = [];
    components.forEach((component) => {
        /**
         * Finds name for ImportSpecifier
         * like import { Input } from '@fcc/rbo-ui'
         * or import { Input as newInput } from '@fcc/rbo-ui'
         */
        importDeclarations
            .find(jscodeshift.ImportSpecifier, {
                imported: {
                    type: 'Identifier',
                    name: component,
                },
            })
            .forEach((path) => {
                const { node } = path;
                localNameSpaces.push({
                    type: 'JSXIdentifier',
                    name: node.local.name,
                });
            });

        /**
         * Finds name for ImportNamespaceSpecifier
         * like import * as Components from '@fcc/rbo-ui'
         */
        importDeclarations.find(jscodeshift.ImportNamespaceSpecifier).forEach((path) => {
            const { node } = path;
            localNameSpaces.push({
                type: 'JSXMemberExpression',
                object: {
                    type: 'JSXIdentifier',
                    name: node.local.name,
                },
                property: {
                    type: 'JSXIdentifier',
                    name: component,
                },
            });
        });
    });

    return localNameSpaces;
};
