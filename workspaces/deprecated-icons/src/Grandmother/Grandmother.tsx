import React, { SVGAttributes } from 'react';

export interface GrandmotherProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Grandmother: React.FC<GrandmotherProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 11a5.006 5.006 0 00-5-5 1.111 1.111 0 00-.116.012A7.991 7.991 0 002 10.063V13a8 8 0 0015.427 2.957A4.99 4.99 0 0022 11zm-12 8a6.006 6.006 0 01-6-6v-.039a7.5 7.5 0 005.969-3.787A7.5 7.5 0 0016 12.966V13a6.006 6.006 0 01-6 6zm7.957-5.171A8.1 8.1 0 0018 13v-2.213a5.479 5.479 0 01-6.946-4.558H8.883A5.492 5.492 0 014 10.948v-.885a6 6 0 0111.975-.5c.174.013.341.046.519.046a6.48 6.48 0 001.474-.183 8.01 8.01 0 00-.224-1.321 2.984 2.984 0 01.213 5.725v-.001z' />
        </svg>
    );
};

Grandmother.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Grandmother.displayName = 'Grandmother';
export default Grandmother;
