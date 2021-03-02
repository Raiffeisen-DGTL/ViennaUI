/**
 * Updates attribute value by attributes values map for components by localNameSpaces collection
 * Method modify root object
 * @param {Object} root
 * @param {{Object}} jscodeshift
 * @param {Array} localNameSpaces
 * @param {string} attributeName
 * @param {Object} attributeValuesMap
 */
export const updateAttributeValue = ({ root, jscodeshift, localNameSpaces, attributeName, attributeValuesMap }) => {
    localNameSpaces.forEach((name) => {
        root.find(jscodeshift.JSXOpeningElement, { name })
            .find(jscodeshift.JSXAttribute, {
                name: {
                    name: attributeName,
                    type: 'JSXIdentifier',
                },
            })
            .replaceWith(({ node }) => {
                const { value } = node;

                if (attributeValuesMap[value.value]) {
                    node.value.value = attributeValuesMap[value.value];
                } else if (value.expression && value.expression.value && attributeValuesMap[value.expression.value]) {
                    node.value.expression.value = attributeValuesMap[value.expression.value];
                }

                return node;
            });
    });
};
