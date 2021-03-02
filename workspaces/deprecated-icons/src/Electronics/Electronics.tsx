import React, { SVGAttributes } from 'react';

export interface ElectronicsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Electronics: React.FC<ElectronicsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 2a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h16zm0 11V4H4v9h16zm-7 5.001h4l1 1v1H6v-1l1-1h4v-2h2v2z' />
        </svg>
    );
};

Electronics.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Electronics.displayName = 'Electronics';
export default Electronics;
