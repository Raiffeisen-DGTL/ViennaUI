import React, { SVGAttributes } from 'react';

export interface BlockedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Blocked: React.FC<BlockedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 0112.906-6.32L5.68 16.906A7.965 7.965 0 014 12zm3.094 6.32A8 8 0 0018.32 7.094L7.094 18.32z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Blocked.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Blocked.displayName = 'Blocked';
export default Blocked;
