import React, { SVGAttributes } from 'react';

export interface ChangePinCardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChangePinCard: React.FC<ChangePinCardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 3a2 2 0 00-2 2v10a2 2 0 002 2h6.906c.018-.361.154-.75.407-1.17.253-.418.517-.695.793-.83H3V9h18V5a2 2 0 00-2-2H3zm16 4H3V5h16v2zm1.848 10.475L24 14.323 19.677 10l-4.42 4.42a3.85 3.85 0 103.323 3.323l1.268-1.268 1 1zm-1-3.404l-3.135 3.135.127.474a2.154 2.154 0 01-2.078 2.708 2.15 2.15 0 11.558-4.228l.474.127 3.883-3.883 1.919 1.92-.748.747-1-1zm-4.086 4.167a1 1 0 10-2 0 1 1 0 002 0z' />
        </svg>
    );
};

ChangePinCard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChangePinCard.displayName = 'ChangePinCard';
export default ChangePinCard;
