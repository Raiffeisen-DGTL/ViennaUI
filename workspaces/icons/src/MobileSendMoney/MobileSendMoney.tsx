import React, { SVGAttributes } from 'react';

export interface MobileSendMoneyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MobileSendMoney: React.FC<MobileSendMoneyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 4h6V2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2v-6h-2v6H7V4z' />
            <path d='M13 17a1 1 0 11-2 0 1 1 0 012 0zm8.707-9.293a1 1 0 000-1.414l-4-4-1.414 1.414L18.586 6H13v2h5.586l-2.293 2.293 1.414 1.414 4-4z' />
        </svg>
    );
};

MobileSendMoney.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MobileSendMoney.displayName = 'MobileSendMoney';
export default MobileSendMoney;
