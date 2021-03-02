import React, { SVGAttributes } from 'react';

export interface GoalsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Goals: React.FC<GoalsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 18.705A7.028 7.028 0 0018.705 14h2.064A9.026 9.026 0 0114 20.769v-2.064zM3.231 10A9.026 9.026 0 0110 3.231V5.3A7.028 7.028 0 005.3 10H3.231zm15.474 0A7.028 7.028 0 0014 5.3V3.231A9.026 9.026 0 0120.769 10h-2.064zM5.3 14a7.028 7.028 0 004.7 4.705v2.064A9.026 9.026 0 013.231 14H5.3zM11 2h2v5h-2V2zm0 9h2v2h-2v-2zm0 6h2v5h-2v-5zm6-6h5v2h-5v-2zM2 11h5v2H2v-2z' />
        </svg>
    );
};

Goals.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Goals.displayName = 'Goals';
export default Goals;
