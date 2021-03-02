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
            <path d='M15 2h-4v4H8a1 1 0 00-1 1v3H3a1 1 0 00-1 1v11h2V12h4a1 1 0 001-1V8h6v3a1 1 0 001 1h4v10h2V11a1 1 0 00-1-1h-4V7a1 1 0 00-1-1h-3V4h2V2z' />
            <path d='M11 10h2v2h-2v-2zm6 10v-2h-2v2h2zm-6-2h2v4h-2v-4zm-2 0H7v2h2v-2zm8-4v2h-2v-2h2zm-4 0h-2v2h2v-2zm-6 0h2v2H7v-2z' />
        </svg>
    );
};

ToBudget.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ToBudget.displayName = 'ToBudget';
export default ToBudget;
