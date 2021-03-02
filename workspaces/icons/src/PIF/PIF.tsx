import React, { SVGAttributes } from 'react';

export interface PIFProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PIF: React.FC<PIFProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14.707 11.207l8-8-1.414-1.414-8 8 1.414 1.414zM13 3.75a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z' />
            <path
                fillRule='evenodd'
                d='M11 3.5a10 10 0 1010 10 1 1 0 00-1-1h-8v-8a1 1 0 00-1-1zM6.555 6.848A8 8 0 0110 5.563V13.5a1 1 0 001 1h7.937A8 8 0 116.555 6.848z'
                clipRule='evenodd'
            />
            <path d='M19.5 9.25a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z' />
        </svg>
    );
};

PIF.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PIF.displayName = 'PIF';
export default PIF;
