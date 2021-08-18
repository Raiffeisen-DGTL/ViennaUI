import React, { SVGAttributes } from 'react';

export interface OtherRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const OtherRing: React.FC<OtherRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zm-1 7h2v2h-2v-2zm-3 0h2v2H8v-2zm6 0h2v2h-2v-2z' />
        </svg>
    );
};

OtherRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

OtherRing.displayName = 'OtherRing';
export default OtherRing;
