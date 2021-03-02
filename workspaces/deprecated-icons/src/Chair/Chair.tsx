import React, { SVGAttributes } from 'react';

export interface ChairProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Chair: React.FC<ChairProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.46 22l-1.99-6H8.18l-2 6H4.07l2.06-6.17L3.71 2h2.03l2.1 12h10.08l2.64 8h-2.1zM9 10.44A13.23 13.23 0 006.79 2h2.36a15.54 15.54 0 011.87 8.21A15 15 0 0113.5 10a15.55 15.55 0 014.5.67v2.12a13.43 13.43 0 00-4.5-.79 13.64 13.64 0 00-3.25.42l-1.34.34.09-1.37v-.95z' />
        </svg>
    );
};

Chair.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Chair.displayName = 'Chair';
export default Chair;
