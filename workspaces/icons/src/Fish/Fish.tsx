import React, { SVGAttributes } from 'react';

export interface FishProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Fish: React.FC<FishProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6.15 4.474A1 1 0 017 4h6c3.419 0 5.922 1.997 7.51 3.85a16.74 16.74 0 012.247 3.41c.051.104.09.187.117.246l.044.098a1.08 1.08 0 01-.012.82l-.032.07a15.141 15.141 0 01-.569 1.095 16.74 16.74 0 01-1.796 2.562C18.922 18.003 16.42 20 13 20H7a1 1 0 01-.894-1.447l.74-1.481-1.123-1.685-2.168 1.445A1 1 0 012 16V8a1 1 0 011.555-.832l2.168 1.445 1.123-1.685-.74-1.48a1 1 0 01.043-.974zm14.42 6.928c.133.234.24.437.322.598a14.748 14.748 0 01-1.901 2.85 11.16 11.16 0 01-1.608 1.549A6 6 0 0114 11.017l-2 .006a8 8 0 003.399 6.521A6.546 6.546 0 0113 18H8.618l.276-.553a1 1 0 00-.062-1.002l-2-3a1 1 0 00-1.387-.277L4 14.132V9.869l1.445.963a1 1 0 001.387-.277l2-3a1 1 0 00.062-1.002L8.618 6H13c2.581 0 4.578 1.503 5.99 3.15a14.747 14.747 0 011.58 2.252z'
                clipRule='evenodd'
            />
            <path d='M18 11a1 1 0 11-2 0 1 1 0 012 0z' />
        </svg>
    );
};

Fish.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fish.displayName = 'Fish';
export default Fish;
