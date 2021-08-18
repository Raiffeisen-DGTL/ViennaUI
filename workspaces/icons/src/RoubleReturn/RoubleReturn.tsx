import React, { SVGAttributes } from 'react';

export interface RoubleReturnProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RoubleReturn: React.FC<RoubleReturnProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 10V9h3a3 3 0 000-6H4v4H2v2h2v1H2v2h2v3h2v-3h4v-2H6zm3.383-3.076A1 1 0 019 7H6V5h3a1 1 0 01.383 1.924z'
                clipRule='evenodd'
            />
            <path d='M14.592 4.788v4.5h2V6.716a7.002 7.002 0 01-.33 10.837 7 7 0 01-9.212-.603l-1.414 1.414A9 9 0 0018.513 5.788h1.578v-2h-4.5a1 1 0 00-1 1z' />
        </svg>
    );
};

RoubleReturn.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RoubleReturn.displayName = 'RoubleReturn';
export default RoubleReturn;
