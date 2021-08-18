import React, { SVGAttributes } from 'react';

export interface CurrentRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CurrentRing: React.FC<CurrentRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.25 13.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm5-1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm2.5 1.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z' />
            <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CurrentRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CurrentRing.displayName = 'CurrentRing';
export default CurrentRing;
