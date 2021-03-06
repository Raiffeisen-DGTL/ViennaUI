import React, { SVGAttributes } from 'react';

export interface Esia2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Esia2: React.FC<Esia2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 6a3 3 0 013-3h14a3 3 0 013 3v6h-2V6a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h5v2H5a3 3 0 01-3-3V6z' />
            <path
                fillRule='evenodd'
                d='M13.474 11.15a1 1 0 01.973-.044l8 4a1 1 0 010 1.788l-.987.494 1.372 2.057a1 1 0 01-.385 1.45l-4 2a1 1 0 01-1.28-.34l-1.51-2.266-1.21.605A1 1 0 0113 20v-8a1 1 0 01.474-.85zm6.29 4.85L15 13.618v4.764l1.342-.671 2 3 2.198-1.099-2-3L19.764 16zM7 7a1 1 0 00-1 1v2a1 1 0 00.293.707l2 2a1 1 0 001.414 0l2-2A1 1 0 0012 10V8a1 1 0 00-1-1H7zm1 2.586V9h2v.586l-1 1-1-1z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Esia2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Esia2.displayName = 'Esia2';
export default Esia2;
