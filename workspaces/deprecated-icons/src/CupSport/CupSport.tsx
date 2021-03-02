import React, { SVGAttributes } from 'react';

export interface CupSportProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CupSport: React.FC<CupSportProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16 4h-5v7h-1l-1-1V4H8v7a4 4 0 108 0V4zm2-2h4v5.133c0 .82-.326 1.607-.906 2.187L19 11.414V8.586l1-1V4h-2v7a6.002 6.002 0 01-5 5.917V20h3l1 1v1H7v-1l1-1h3v-3.083A6.002 6.002 0 016 11V4H4v3.586l1 1v2.828L2.906 9.32A3.094 3.094 0 012 7.133V2h16z' />
        </svg>
    );
};

CupSport.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CupSport.displayName = 'CupSport';
export default CupSport;
