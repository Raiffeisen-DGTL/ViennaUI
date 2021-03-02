import React, { SVGAttributes } from 'react';

export interface Wave2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Wave2: React.FC<Wave2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.86 19.646A1.8 1.8 0 0022 20v2a3.764 3.764 0 01-2.179-.643 2.061 2.061 0 00-2.316 0 3.747 3.747 0 01-2.172.643 3.86 3.86 0 01-2.22-.651A1.773 1.773 0 0012 21a1.792 1.792 0 00-1.133.352 3.821 3.821 0 01-2.2.648 3.758 3.758 0 01-2.166-.641A1.851 1.851 0 005.333 21c-.414-.01-.82.116-1.156.359A3.844 3.844 0 012 22v-2c.414.01.82-.116 1.156-.359A3.844 3.844 0 015.333 19a3.825 3.825 0 012.205.648A1.79 1.79 0 008.667 20c.419.015.83-.113 1.167-.362a3.957 3.957 0 014.315 0c.343.25.76.378 1.184.362.407.014.807-.11 1.133-.354a4.054 4.054 0 014.394 0zM20 18H5l-1-1v-1h16v2zm-9.814-3H7.9A9.061 9.061 0 0115 2.07V15h-2V4.723A7.058 7.058 0 0010.186 15z' />
        </svg>
    );
};

Wave2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Wave2.displayName = 'Wave2';
export default Wave2;
