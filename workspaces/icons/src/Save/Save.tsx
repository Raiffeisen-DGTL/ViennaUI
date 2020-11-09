import React, { SVGAttributes } from 'react';

export interface SaveProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Save: React.FC<SaveProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.423 6.01c.37.368.577.868.577 1.39v12.631A1.97 1.97 0 0120.031 22H3.969A1.97 1.97 0 012 20.031V3.969A1.97 1.97 0 013.969 2H17c.378.094.722.294.99.576l3.433 3.434zM9 4v5h6V4H9zm11 16V7.414l-3-3V11H7V4H4v16h16zM7 14h10v2H7v-2z' />
        </svg>
    );
};

Save.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Save.displayName = 'Save';
export default Save;
