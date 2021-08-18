import React, { SVGAttributes } from 'react';

export interface UnlockedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Unlocked: React.FC<UnlockedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 2a5 5 0 015 5v4h2a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9a1 1 0 011-1h10V7a3 3 0 10-6 0v1H7V7a5 5 0 015-5zm6 11H6v7h12v-7zm-5 2v3h-2v-3h2z' />
        </svg>
    );
};

Unlocked.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Unlocked.displayName = 'Unlocked';
export default Unlocked;
