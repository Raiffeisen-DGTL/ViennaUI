import React, { SVGAttributes } from 'react';

export interface ExpectationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Expectation: React.FC<ExpectationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 11.586l3-3V5h2v3.547c0 .555-.22 1.087-.613 1.48L14.414 12l1.973 1.973c.392.392.613.924.613 1.479V19h-2v-3.586l-3-3-3 3V19H7v-3.548c0-.555.22-1.087.613-1.479L9.586 12l-1.973-1.973A2.093 2.093 0 017 8.547V5h2v3.586l3 3zM5 2h14v1l-1 1H6L5 3V2zm1 18h12l1 1v1H5v-1l1-1z' />
        </svg>
    );
};

Expectation.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Expectation.displayName = 'Expectation';
export default Expectation;