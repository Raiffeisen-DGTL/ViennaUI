import React, { SVGAttributes } from 'react';

export interface UnlockProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Unlock: React.FC<UnlockProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.989 9A2.01 2.01 0 0120 11.01v8.979c0 1.11-.9 2.011-2.011 2.011H6.011C4.901 22 4 21.1 4 19.989V11.01A2.01 2.01 0 016.011 9H7V7a5 5 0 1110 0v1h-2V7a3 3 0 00-6 0v2h8.989zM18 20v-9H6v9h12zm-7-7h2v5h-2v-5z' />
        </svg>
    );
};

Unlock.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Unlock.displayName = 'Unlock';
export default Unlock;
