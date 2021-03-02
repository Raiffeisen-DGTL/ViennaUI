import React, { SVGAttributes } from 'react';

export interface CastleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Castle: React.FC<CastleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 6H6V4H4v4h2v14H4V10h-.016A1.984 1.984 0 012 8.016V2h14v6.016A1.984 1.984 0 0114.016 10H14v1l-2 2.006V8h2V4h-2v2h-2V4H8v2zm14 12.582v1.211h-1V22h-2v-3.833l-3.999-3.907L11 18.186V22H9v-2.207H8v-1.185l6.999-6.868L22 18.582zM8 10a1 1 0 112 0v3H8v-3zm7 8a1 1 0 011 1v3h-2v-3a1 1 0 011-1z' />
        </svg>
    );
};

Castle.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Castle.displayName = 'Castle';
export default Castle;
