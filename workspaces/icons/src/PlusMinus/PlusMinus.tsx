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
            <path d='M5 1v4H1v2h4v4h2V7h4V5H7V1H5zm.707 19.707l14-14-1.414-1.414-14 14 1.414 1.414zM23 18H13v2h10v-2z' />
        </svg>
    );
};

PlusMinus.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PlusMinus.displayName = 'PlusMinus';
export default PlusMinus;
