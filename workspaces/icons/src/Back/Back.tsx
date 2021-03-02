import React, { SVGAttributes } from 'react';

export interface BackProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Back: React.FC<BackProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5.494 11l5.853-5.571L9.97 3.98l-7.66 7.29a1 1 0 00-.001 1.448l7.658 7.304 1.38-1.447L5.505 13 22 13.001v-2H5.494z' />
        </svg>
    );
};

Back.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Back.displayName = 'Back';
export default Back;
