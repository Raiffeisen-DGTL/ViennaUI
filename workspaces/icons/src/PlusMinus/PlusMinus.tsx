import React, { SVGAttributes } from 'react';

export interface PlusMinusProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PlusMinus: React.FC<PlusMinusProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 3.414L3.414 22H2v-1.414L20.586 2H22v1.414zM14 18h8v2h-8v-2zm-9-8V7H2V5h3V2h2v3h3v2H7v3H5z' />
        </svg>
    );
};

PlusMinus.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PlusMinus.displayName = 'PlusMinus';
export default PlusMinus;
