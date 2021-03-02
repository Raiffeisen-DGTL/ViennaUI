import React, { SVGAttributes } from 'react';

export interface BackpackProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Backpack: React.FC<BackpackProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 4v.842l-2 .8v-1.63A2.011 2.011 0 0110.01 2h3.98A2.011 2.011 0 0116 4.012v1.626l-2-.8V4h-4zm1.453 2.013A8.01 8.01 0 0120 14v6.954c0 1.11-.9 2.01-2.01 2.01H6.01c-1.11 0-2.01-.9-2.01-2.01v-6.676a8.19 8.19 0 017.452-8.265zM18 20.964V14a5.962 5.962 0 00-1-3.315v4.379A1.937 1.937 0 0115.063 17H14v-2h1V8.807a5.954 5.954 0 00-6 0V15h1v2H8.939A1.937 1.937 0 017 15.068v-4.379A5.962 5.962 0 006 14v6.964h12zm-7-6.963h2v4h-2v-4z' />
        </svg>
    );
};

Backpack.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Backpack.displayName = 'Backpack';
export default Backpack;
