import React, { SVGAttributes } from 'react';

export interface Acquiring2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Acquiring2: React.FC<Acquiring2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M9 2a1 1 0 00-1 1v1H4a1 1 0 00-1 1v16a1 1 0 001 1h3v-2H5V6h3v2H7v2h10V8h-1V6h3v14h-6v2h7a1 1 0 001-1V5a1 1 0 00-1-1h-4V3a1 1 0 00-1-1H9zm5 6h-4V4h4v4z'
                clipRule='evenodd'
            />
            <path d='M17 16v2h-2v-2h2zm0-2v-2h-2v2h2zm-7.707-1.707l-3 3 1.414 1.414L9 15.414V23h2v-7.586l1.293 1.293 1.414-1.414-3-3a1 1 0 00-1.414 0z' />
        </svg>
    );
};

Acquiring2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Acquiring2.displayName = 'Acquiring2';
export default Acquiring2;
