import React, { SVGAttributes } from 'react';

export interface CreditOperations2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CreditOperations2: React.FC<CreditOperations2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4.843.793l-3.5 3.5a1 1 0 000 1.414l3.5 3.5 1.414-1.414L4.465 6H20V4H4.465l1.792-1.793L4.843.793zm14.278 24.414l3.5-3.5a1 1 0 000-1.414l-3.5-3.5-1.414 1.414L19.5 20H4v2h15.5l-1.793 1.793 1.414 1.414zM15 17.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
            <path d='M10.5 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.293 7.207l7-7-1.414-1.414-7 7 1.414 1.414z' />
        </svg>
    );
};

CreditOperations2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CreditOperations2.displayName = 'CreditOperations2';
export default CreditOperations2;
