import React, { SVGAttributes } from 'react';

export interface SunCloudProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SunCloud: React.FC<SunCloudProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.485 1.006l-1.87-.71-1.065 2.805 1.87.71 1.065-2.805zm-3.421 6.189a3.002 3.002 0 00-3.56 1.14l-1.667-1.11a5.002 5.002 0 018.493 5.273l-1.734-.998a3 3 0 00-1.533-4.306z' />
            <path
                fillRule='evenodd'
                d='M5 14a5 5 0 019.9-1H16a5 5 0 010 10H5.5a4.5 4.5 0 01-.5-8.973V14zm5-3a3 3 0 00-2.906 3.75A1 1 0 016.126 16H5.5a2.5 2.5 0 000 5H16a3 3 0 100-6h-2a1 1 0 01-1-1 3 3 0 00-3-3z'
                clipRule='evenodd'
            />
            <path d='M22.71 4.987l.821 1.824-2.736 1.23-.82-1.823 2.736-1.23zm.283 9.498l.71-1.87-2.805-1.065-.71 1.87 2.805 1.065zM7.81 6.58L7.1 8.45 4.297 7.385l.71-1.87L7.81 6.58zm2.408-2.555l1.824-.82L10.812.47l-1.824.82 1.23 2.736z' />
        </svg>
    );
};

SunCloud.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SunCloud.displayName = 'SunCloud';
export default SunCloud;
