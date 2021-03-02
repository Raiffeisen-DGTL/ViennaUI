import React, { SVGAttributes } from 'react';

export interface MountainsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Mountains: React.FC<MountainsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M14.02 4a1 1 0 01.848.504l8 14A1 1 0 0122 20H2a1 1 0 01-.894-1.447l5-10a1 1 0 011.788 0l1.203 2.405 4.055-6.488A1 1 0 0114.02 4zm-1.2 4.775l1.151.921 1.04-.91-1.05-1.838-1.141 1.827zm3.204 1.783l-1.366 1.195a1 1 0 01-1.283.028l-1.622-1.298-1.905 3.047a1 1 0 01-1.742-.083L7 11.237 3.618 18h16.659l-4.253-7.442z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Mountains.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mountains.displayName = 'Mountains';
export default Mountains;
