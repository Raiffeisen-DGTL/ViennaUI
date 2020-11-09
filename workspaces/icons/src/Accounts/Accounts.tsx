import React, { SVGAttributes } from 'react';

export interface AccountsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Accounts: React.FC<AccountsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 3.938V4H5v15h-.063A1.937 1.937 0 013 17.063V3.938A1.937 1.937 0 014.937 2h11.125A1.937 1.937 0 0118 3.938zM19.062 5A1.937 1.937 0 0121 6.938v13.125A1.937 1.937 0 0119.062 22H7.937A1.937 1.937 0 016 20.063V6.938A1.937 1.937 0 017.937 5h11.125zM19 20V7H8v13h11zm-9-10h7v2h-7v-2zm0 3h7v2h-7v-2z' />
        </svg>
    );
};

Accounts.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Accounts.displayName = 'Accounts';
export default Accounts;
