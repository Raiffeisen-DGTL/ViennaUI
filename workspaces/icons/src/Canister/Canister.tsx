import React, { SVGAttributes } from 'react';

export interface CanisterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Canister: React.FC<CanisterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12.5 14.914l-2.793 2.793-1.414-1.414L10.586 14l-2.293-2.293 1.414-1.414 2.793 2.793 2.793-2.793 1.414 1.414L14.414 14l2.293 2.293-1.414 1.414-2.793-2.793z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M11.414 3A2 2 0 0010 3.586L4.293 9.293A1 1 0 004 10v10a1 1 0 001 1h15a1 1 0 001-1V5a2 2 0 00-2-2h-7.586zM19 7V5h-7.586l-2 2H19zM7.414 9L6 10.414V19h13V9H7.414z'
                clipRule='evenodd'
            />
            <path d='M3.707 7.707l3-3-1.414-1.414-3 3 1.414 1.414z' />
        </svg>
    );
};

Canister.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Canister.displayName = 'Canister';
export default Canister;
