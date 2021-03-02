import React, { SVGAttributes } from 'react';

export interface AccountErrorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AccountError: React.FC<AccountErrorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fill='#2B2D33'
                d='M20 2H6a2 2 0 00-2 2v9.5h2V4h14v16H10v2h9.573A2.426 2.426 0 0022 19.573V4a2 2 0 00-2-2z'
            />
            <path
                fill='#2B2D33'
                d='M18 6H8v2h10V6zM7.121 15l1.415 1.414-2.122 2.121 2.122 2.122L7.12 22.07 5 19.95l-2.121 2.12-1.415-1.414 2.122-2.122-2.122-2.12L2.88 15 5 17.121 7.121 15z'
            />
        </svg>
    );
};

AccountError.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AccountError.displayName = 'AccountError';
export default AccountError;
