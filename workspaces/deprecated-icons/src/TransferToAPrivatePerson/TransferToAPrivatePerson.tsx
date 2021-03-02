import React, { SVGAttributes } from 'react';

export interface TransferToAPrivatePersonProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TransferToAPrivatePerson: React.FC<TransferToAPrivatePersonProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 11a4 4 0 01-4-4V6a4 4 0 118 0v1a4 4 0 01-4 4zm0-7a2 2 0 00-2 2v1a2 2 0 104 0V6a2 2 0 00-2-2zm-1.727 11l3.999 4-3.999 4H9v-1.273L10.727 20H2v-2h8.727L9 16.273V15h1.273zm7.703 7l-1.5-6.735A1.624 1.624 0 0014.9 14H9.1a1.626 1.626 0 00-1.579 1.265L7.136 17h-2.05l.484-2.169A3.594 3.594 0 019.1 12h5.8a3.6 3.6 0 013.53 2.831L20.03 22h-2.054z' />
        </svg>
    );
};

TransferToAPrivatePerson.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TransferToAPrivatePerson.displayName = 'TransferToAPrivatePerson';
export default TransferToAPrivatePerson;
