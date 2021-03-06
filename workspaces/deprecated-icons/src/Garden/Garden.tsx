import React, { SVGAttributes } from 'react';

export interface GardenProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Garden: React.FC<GardenProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7.063 5A3.943 3.943 0 0111 8.938V13H5.938A3.943 3.943 0 012 9.063V5h5.063zM9 11V8.938C9 7.868 8.133 7.001 7.063 7H4v2.063A1.939 1.939 0 005.938 11H9zm7.094-9H22v3.906A4.1 4.1 0 0117.906 10H14v8h-2V6.094A4.1 4.1 0 0116.094 2zM20 5.906V4h-3.906A2.1 2.1 0 0014 6.094V8h3.906A2.1 2.1 0 0020 5.906zM5 19h14v2H5v-2z' />
        </svg>
    );
};

Garden.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Garden.displayName = 'Garden';
export default Garden;
