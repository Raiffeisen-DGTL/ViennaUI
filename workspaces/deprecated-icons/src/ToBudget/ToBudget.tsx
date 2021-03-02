import React, { SVGAttributes } from 'react';

export interface ToBudgetProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ToBudget: React.FC<ToBudgetProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 11h2.958c1.128 0 2.042.914 2.042 2.042V22h-2v-9h-5V9H9v4H4v3H2v-2.958C2 11.914 2.914 11 4.042 11H7V9.042C7 7.914 7.914 7 9.042 7H11V2h6l-2 1.5L17 5h-4v2h1.958C16.086 7 17 7.914 17 9.042V11zm-6-1h2v3h-2v-3zm-2 4h1.273l3.999 4-3.999 4H9v-1.273L10.728 19H2v-2h8.728L9 15.273V14z' />
        </svg>
    );
};

ToBudget.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ToBudget.displayName = 'ToBudget';
export default ToBudget;
