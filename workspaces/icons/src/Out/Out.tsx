import React, { SVGAttributes } from 'react';

export interface OutProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Out: React.FC<OutProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M16.46 6H7.875V4h11a1 1 0 011 1v11h-2V7.414L5.582 19.707l-1.415-1.414L16.46 6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Out.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Out.displayName = 'Out';
export default Out;
