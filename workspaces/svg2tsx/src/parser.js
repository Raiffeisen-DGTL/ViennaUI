const svgp = require('svg-parser');

// Export
module.exports = {
    parse,
    transform,
    stringify,
};

/**
 * Specific rules for attributes
 * @type {Object}
 */
const ATTRIBUTES_RULES = {
    class: 'className',
    viewBox: 'viewBox',
};

/**
 * Specific self closing tags
 * @param {string[]}
 */
const SELF_CLOSING_TAGS = ['defs', 'circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect', 'stop', 'use'];

/**
 * String is string
 *
 * @param {*} value The value
 * @returns {bool} Returns flag
 */
const isString = (value) => {
    return typeof value === 'string';
};

/**
 * Object is object
 *
 * @param {*} value The Value
 * @returns {bool} Returns flag
 */
const isObject = (value) => {
    return value === Object(value);
};

/**
 * Convert string to camelCase
 *
 * @param {*} str The string
 * @returns {string} Returns convert string
 */
const camelCase = (str) => {
    return str
        .replace(/\-/g, ' ')
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }

            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
};

/**
 * Convert SVG to AST
 *
 * @param {string} data SVG
 * @returns {Object} Returns structure by parse
 */
function parse(data) {
    return svgp.parse(data);
}

/**
 * Apply transforms to SVG tree
 *
 * @param {Object} node The node
 * @returns {Object} Returns new nodes
 */
function transform(node) {
    if (isString(node)) {
        return node;
    }

    if (Array.isArray(node)) {
        return node.map((n) => transform(n));
    }

    const children = node.children.map(transform);
    const properties = isObject(node.properties)
        ? Object.keys(node.properties).reduce((result, name) => {
              const attribute = node.properties[name];

              const isStyleAttribute = name === 'style';
              const isDataAttribute = name.startsWith('data-');

              if (isDataAttribute || isStyleAttribute) {
                  return {
                      ...result,
                      [name]: attribute,
                  };
              }

              if (ATTRIBUTES_RULES[name]) {
                  return {
                      ...result,
                      [ATTRIBUTES_RULES[name]]: attribute,
                  };
              }

              return {
                  ...result,
                  [camelCase(name)]: attribute,
              };
          }, {})
        : {};

    return {
        ...node,
        children,
        properties,
    };
}

/**
 * Convert SVG to AST
 * @by https://github.com/balajmarius/svg2jsx
 *
 * @param {Object} node The node
 * @returns {Object} Returns structure by parse
 */
function stringify(node) {
    if (isString(node)) {
        return node;
    }

    if (node.type === 'root') {
        return stringify(node.children);
    }

    if (Array.isArray(node)) {
        return node.map((n) => stringify(n)).join('');
    }

    const attributes = stringifyProperties(node.properties);
    const children = node.children.reduce((accumulator, childrenNode) => {
        return accumulator + stringify(childrenNode);
    }, '');

    if (SELF_CLOSING_TAGS.indexOf(node.tagName) !== -1 && !children) {
        return `<${node.tagName}${attributes} />`;
    }

    return `<${node.tagName}${attributes}>${children}</${node.tagName}>`;
}

/**
 * Stringify properties
 * @by https://github.com/balajmarius/svg2jsx
 *
 * @param {Object=} properties Node properties
 * @returns {string} Returns string plain
 */
function stringifyProperties(properties = {}) {
    const attributeNames = Object.keys(properties);

    return attributeNames.reduce((accumulator, attributeName) => {
        const attribute = properties[attributeName];

        if (isObject(attribute)) {
            return `${accumulator} ${attributeName}={{ ${stringifyStyle(attribute)} }}`;
        }

        return `${accumulator} ${attributeName}="${attribute}"`;
    }, '');
}

/**
 * Stringify style
 * @by https://github.com/balajmarius/svg2jsx
 *
 * @param {Object=} style Node style
 * @returns {string} Returns string styles
 */
function stringifyStyle(style = {}) {
    const propertyNames = Object.keys(style);

    return propertyNames.reduce((accumulator, propertyName) => {
        const property = style[propertyName];

        if (isString(property)) {
            return `${accumulator}${propertyName}: "${property}", `;
        }

        return `${accumulator}${propertyName}: ${property}, `;
    }, String());
}
