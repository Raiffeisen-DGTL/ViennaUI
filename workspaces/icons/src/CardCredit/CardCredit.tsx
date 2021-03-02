import React, { SVGAttributes } from 'react';

export interface CardCreditProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardCredit: React.FC<CardCreditProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5 3a3 3 0 00-3 3v3h18v7a1 1 0 01-1 1h-3v2h3a3 3 0 003-3V6a3 3 0 00-3-3H5zm15 3v1H4V6a1 1 0 011-1h14a1 1 0 011 1z'
                clipRule='evenodd'
            />
            <path d='M12 17a2 2 0 100 4 2 2 0 000-4zM2 13a2 2 0 114 0 2 2 0 01-4 0zm2.207 8.207l9-9-1.414-1.414-9 9 1.414 1.414z' />
        </svg>
    );
};

CardCredit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardCredit.displayName = 'CardCredit';
export default CardCredit;
