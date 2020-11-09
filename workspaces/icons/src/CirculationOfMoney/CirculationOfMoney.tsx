import React, { SVGAttributes } from 'react';

export interface CirculationOfMoneyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CirculationOfMoney: React.FC<CirculationOfMoneyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 13h-2.313v1.344H15V16h-3.313v2H10v-2H8v-1.656h2V13H8v-1.687h2V7h4a3 3 0 010 6zm-2.3-4.3v2.6H14a1.3 1.3 0 100-2.6h-2.3zM6 11v1.2l-3 3-3-2.973V11h1.177l.83.823a9.989 9.989 0 0119.1-3.932L19.569 9.43a7.991 7.991 0 00-15.556 2.357L4.8 11H6zm15-1.2l3 2.973V14h-1.177l-.89-.88a9.993 9.993 0 01-18.689 3.7l1.491-1.491a7.987 7.987 0 0015.143-2.007L19.2 14H18v-1.2l3-3z' />
        </svg>
    );
};

CirculationOfMoney.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CirculationOfMoney.displayName = 'CirculationOfMoney';
export default CirculationOfMoney;
