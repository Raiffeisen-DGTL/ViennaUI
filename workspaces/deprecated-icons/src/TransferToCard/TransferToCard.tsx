import React, { SVGAttributes } from 'react';

export interface TransferToCardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TransferToCard: React.FC<TransferToCardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 4a2 2 0 012 2H4v12a2 2 0 01-2-2V6a2 2 0 012-2h13zM5 15v-2h7.868L11 11.131V10h1.131l4.001 4-4.001 4H11v-1.131L12.868 15H5zm17-6.018v10.035A1.982 1.982 0 0120.015 21H7a2 2 0 01-2-2v-3h2v3h13V9H7v3H5V9a2 2 0 012-2h13.013A1.982 1.982 0 0122 8.982z' />
        </svg>
    );
};

TransferToCard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TransferToCard.displayName = 'TransferToCard';
export default TransferToCard;
