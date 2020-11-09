import React, { SVGAttributes } from 'react';

export interface ContributionProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Contribution: React.FC<ContributionProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14.767 7l2.09-3.485L16 2H8l-.857 1.515 2.649 4.416-4.7 6.116A4.941 4.941 0 009 22h6a4.941 4.941 0 003.917-7.953L15.031 9H20l1-1V7h-6.233zm-.534-3l-1.8 3h-.868l-1.8-3h4.468zm3.4 14.358A2.886 2.886 0 0115 20H9a2.941 2.941 0 01-2.331-4.734L11.492 9h1.016l4.819 6.266c.696.883.817 2.09.308 3.092h-.002z' />
        </svg>
    );
};

Contribution.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Contribution.displayName = 'Contribution';
export default Contribution;
