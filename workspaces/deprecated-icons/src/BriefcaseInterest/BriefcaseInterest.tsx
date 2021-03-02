import React, { SVGAttributes } from 'react';

export interface BriefcaseInterestProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BriefcaseInterest: React.FC<BriefcaseInterestProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.441 7c.86 0 1.558.697 1.559 1.557v10.454A1.988 1.988 0 0120.012 21H3.559A1.559 1.559 0 012 19.44V8.557A1.559 1.559 0 013.559 7h16.882zM4 19h16V9H4v10zm6-14v1H8v-.96A2.041 2.041 0 0110.042 3h3.916A2.041 2.041 0 0116 5.04V6h-2V5h-4zM8 9.999h2v2H8v-2zm6 6h2v2h-2v-2zm2-4.586l-6.586 6.586H8v-1.414l6.586-6.586H16v1.414z' />
        </svg>
    );
};

BriefcaseInterest.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BriefcaseInterest.displayName = 'BriefcaseInterest';
export default BriefcaseInterest;
