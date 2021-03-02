import React, { SVGAttributes } from 'react';

export interface Save1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Save1: React.FC<Save1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 4a1 1 0 011-1h12a1 1 0 01.6.2l4 3a1 1 0 01.4.8v13a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v14h14V7.5L17 6v5H7V5H5zm4 0v4h6V5H9zm8 10H7v-2h10v2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Save1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Save1.displayName = 'Save1';
export default Save1;
