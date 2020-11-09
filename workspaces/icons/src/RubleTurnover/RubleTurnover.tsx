import React, { SVGAttributes } from 'react';

export interface RubleTurnoverProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RubleTurnover: React.FC<RubleTurnoverProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 11.797L6.799 10H8v1.201l-3.997 3.998L0 11.238v-1.234L1.166 10l1.84 1.82c0-.1 0-.2.006-.302.272-5.514 4.957-9.766 10.471-9.506a9.989 9.989 0 11-9.142 14.937l1.473-1.464a8.041 8.041 0 10-.813-3.688zm4 2.547h2V13H9v-1.687h2V7h4a3 3 0 010 6h-2.313v1.344H16V16h-3.313v2H11v-2H9v-1.656zM12.7 8.7v2.6H15a1.3 1.3 0 100-2.6h-2.3z' />
        </svg>
    );
};

RubleTurnover.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RubleTurnover.displayName = 'RubleTurnover';
export default RubleTurnover;
