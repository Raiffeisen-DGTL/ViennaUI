import React, { SVGAttributes } from 'react';

export interface TentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tent: React.FC<TentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12.832 2.945a1 1 0 00-1.664 0l-9 13.5A1 1 0 002 17v4a1 1 0 001 1h18a1 1 0 001-1v-4a1 1 0 00-.168-.555l-9-13.5zM4 19.887v-2.584l8-12 8 12v2.584c-2.48-.4-4.116-1.64-5.186-3.073-1.244-1.664-1.742-3.617-1.816-4.873h-1.996c-.074 1.256-.572 3.21-1.815 4.873C8.116 18.247 6.48 19.487 4 19.887zM8.812 20h6.377a9.834 9.834 0 01-1.978-1.989 11.066 11.066 0 01-1.21-2.062 11.06 11.06 0 01-1.212 2.062A9.831 9.831 0 018.812 20z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Tent.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tent.displayName = 'Tent';
export default Tent;
