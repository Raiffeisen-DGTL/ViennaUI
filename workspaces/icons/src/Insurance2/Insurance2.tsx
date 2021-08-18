import React, { SVGAttributes } from 'react';

export interface Insurance2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Insurance2: React.FC<Insurance2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 2a1 1 0 011 1v7h-2V4H4v16h6v2H3a1 1 0 01-1-1V3a1 1 0 011-1h14z' />
            <path
                fillRule='evenodd'
                d='M12 18a6 6 0 0112 0 1 1 0 01-1 1h-4v2a3 3 0 01-5.25 1.985l1.5-1.324A1 1 0 0017 21v-2h-4a1 1 0 01-1-1zm9.874-1a4.002 4.002 0 00-7.748 0h7.748z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Insurance2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Insurance2.displayName = 'Insurance2';
export default Insurance2;
