import React, { SVGAttributes } from 'react';

export interface BustProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bust: React.FC<BustProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 20h3l1 1v1H7v-1l1-1h3v-1.052a9.961 9.961 0 01-5.683-2.532c-.029-.021-.057-.052-.086-.075l.352-1.575A3.512 3.512 0 019.031 12h5.938a3.512 3.512 0 013.448 2.762l.342 1.561A10.093 10.093 0 0113 18.946V20zm-3.969-6a1.523 1.523 0 00-1.495 1.199l-.082.369a7.911 7.911 0 009.092 0l-.082-.368a1.523 1.523 0 00-1.495-1.2H9.031zM12 11a4 4 0 01-4-4V6a4 4 0 118 0v1a4 4 0 01-4 4zm-2-5v1a2 2 0 104 0V6a2 2 0 10-4 0z' />
        </svg>
    );
};

Bust.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bust.displayName = 'Bust';
export default Bust;
