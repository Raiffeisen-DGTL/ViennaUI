const prettier = require('prettier');

module.exports = {
    beautify,
    naming,
    generateCode,
};

/**
 * Formats code with Prettier
 *
 * @param {string} code The code
 * @returns {string} Returns formatted code
 */
function beautify(code) {
    return prettier.format(code, {
        parser: 'typescript',
    });
}

/**
 * Convert string to React Component name
 *
 * @param {string} str String
 * @returns {string} Returns component name
 */
function naming(str) {
    return str
        .replace(/(\w)(\w*)/g, (g0, g1, g2) => {
            return g1.toUpperCase() + g2;
        })
        .replace(/[^a-z0-9]/gi, '');
}

/**
 * Generate React components
 *
 * @param {string} name The name component
 * @param {string} content The content svg (without svg)
 * @returns {string} Returns React-component code
 */
function generateCode(name, content) {
    return `
        import React, { SVGAttributes } from 'react';

        export interface ${name}Props extends SVGAttributes<SVGElement> {
            [key: string]: any;
            size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
            color?: string;
        }

        const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
        export const ${name}: React.FC<${name}Props> = (props): JSX.Element => {
            const { color = 'currentColor', size = 'm', ...attrs } = props;
            const d = sizes[size] || size;

            return (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
                    ${content}
                </svg>
            )
        };

        ${name}.defaultProps = {
            size: 'm',
            color: 'currentColor',
        };

        ${name}.displayName = '${name}';
        export default ${name};
    `;
}
