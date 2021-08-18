import React, { SVGAttributes } from 'react';

export interface FactoryProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Factory: React.FC<FactoryProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 8H12V6h10v2zm-8 8h2v2h-2v-2zm-2 0h-2v2h2v-2z' />
            <path
                fillRule='evenodd'
                d='M5 8a1 1 0 00-1 1v11H2v2h20v-2h-2v-7a1 1 0 00-1-1h-9V9a1 1 0 00-1-1H5zm3 4v-2H6v2h2zm-2 2v6h12v-6H6z'
                clipRule='evenodd'
            />
            <path d='M10 4h11V2H10a4 4 0 00-4 4h2a2 2 0 012-2z' />
        </svg>
    );
};

Factory.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Factory.displayName = 'Factory';
export default Factory;
