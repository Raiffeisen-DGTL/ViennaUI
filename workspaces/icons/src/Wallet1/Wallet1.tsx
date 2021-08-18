import React, { SVGAttributes } from 'react';

export interface Wallet1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Wallet1: React.FC<Wallet1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M14.1 3.2a1 1 0 01.2 1.4L14 5h3a3 3 0 012.998 2.9l1.772 9.742A2 2 0 0119.802 20H4.198a2 2 0 01-1.967-2.358L4 7.902A3 3 0 017 5h3l-.3-.4a1 1 0 111.6-1.2l.7.933.7-.933a1 1 0 011.4-.2zM12 7h5a1 1 0 110 2H7a1 1 0 010-2h5zm-6.46 3.621l-1.342 7.38h15.604l-1.342-7.38c-.432.242-.93.379-1.46.379H7c-.53 0-1.028-.137-1.46-.379z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Wallet1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Wallet1.displayName = 'Wallet1';
export default Wallet1;
