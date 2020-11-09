import React, { SVGAttributes } from 'react';

export interface MedalProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Medal: React.FC<MedalProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 9.8a5.2 5.2 0 100 10.4 5.2 5.2 0 000-10.4zM12 8a7 7 0 110 14 7 7 0 010-14zm2-6h2.625L13.12 7h-2.359L7.407 2h2.577L12 5l2-3zm-1 14h1v2h-4v-2h1v-2h-1v-2h3v4z' />
        </svg>
    );
};

Medal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Medal.displayName = 'Medal';
export default Medal;
