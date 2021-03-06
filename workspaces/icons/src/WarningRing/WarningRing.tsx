import React, { SVGAttributes } from 'react';

export interface WarningRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const WarningRing: React.FC<WarningRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 13V7h2v6h-2zm1 4a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z' />
            <path
                fillRule='evenodd'
                d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

WarningRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

WarningRing.displayName = 'WarningRing';
export default WarningRing;
