import React, { SVGAttributes } from 'react';

export interface LockedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Locked: React.FC<LockedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 15v3h-2v-3h2z' />
            <path
                fillRule='evenodd'
                d='M12 2a5 5 0 00-5 5v4H5a1 1 0 00-1 1v9a1 1 0 001 1h14a1 1 0 001-1v-9a1 1 0 00-1-1h-2V7a5 5 0 00-5-5zM9 7v4h6V7a3 3 0 00-6 0zm-3 6v7h12v-7H6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Locked.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Locked.displayName = 'Locked';
export default Locked;
