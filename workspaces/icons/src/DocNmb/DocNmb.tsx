import React, { SVGAttributes } from 'react';

export interface DocNmbProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocNmb: React.FC<DocNmbProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 3a1 1 0 011-1h14a1 1 0 011 1v17a1 1 0 01-1 1h-1V4H8v5H6V3z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M2.733 10.87a1 1 0 011.124.449L7 16.556V11h2v9.167a1 1 0 01-1.857.514L4 15.444V21H2v-9.167a1 1 0 01.733-.963zM18 21h-7v-2h7v2zm-3.5-8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 14.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocNmb.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocNmb.displayName = 'DocNmb';
export default DocNmb;
