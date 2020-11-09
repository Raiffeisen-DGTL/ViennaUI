import React, { SVGAttributes } from 'react';

export interface TractorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tractor: React.FC<TractorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 4v4h3.571L12 3h10v1l-1 1h-7.571L12 10H4v2.966a4.531 4.531 0 00-2 .7V10a2 2 0 012-2h1V4H4V2h4v2H7zm11 7a5 5 0 11-4.578 7H7.95a3.5 3.5 0 11-.3-2H13a5 5 0 015-5zM4.5 19.3a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zm13.5 0a3.3 3.3 0 100-6.6 3.3 3.3 0 000 6.6zm3-8.734a6.184 6.184 0 00-2-.687V6h2v4.566z' />
        </svg>
    );
};

Tractor.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tractor.displayName = 'Tractor';
export default Tractor;
