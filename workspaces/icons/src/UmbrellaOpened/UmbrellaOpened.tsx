import React, { SVGAttributes } from 'react';

export interface UmbrellaOpenedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const UmbrellaOpened: React.FC<UmbrellaOpenedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13 1v2.05A9.999 9.999 0 0122 13v1h-9v6a3 3 0 01-6 0v-1h2v1a1 1 0 102 0v-6H2v-1a10 10 0 019-9.95V1h2zm-1 4a8 8 0 00-7.937 7h15.874A7.998 7.998 0 0012 5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

UmbrellaOpened.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

UmbrellaOpened.displayName = 'UmbrellaOpened';
export default UmbrellaOpened;
