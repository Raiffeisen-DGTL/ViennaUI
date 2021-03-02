import React, { SVGAttributes } from 'react';

export interface Picture3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Picture3: React.FC<Picture3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 4a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1H3zm1 9a3 3 0 00.172 1h5.656A3 3 0 104 13zm8 0a5 5 0 01-.101 1H20v-4a1.001 1.001 0 00-1 1 1 1 0 11-2 0 1.001 1.001 0 00-2 0h-2a3 3 0 015-2.236A3 3 0 0120 8V6H4v3a5 5 0 018 4zm-8 3v2h16v-2H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Picture3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Picture3.displayName = 'Picture3';
export default Picture3;
