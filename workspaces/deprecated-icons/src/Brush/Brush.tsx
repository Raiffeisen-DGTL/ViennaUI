import React, { SVGAttributes } from 'react';

export interface BrushProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Brush: React.FC<BrushProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22.187 5.614l-1.949 1.475-2.868-2.868L18.946 2.1H16.7l-7.151 9.607a3.926 3.926 0 00-3.7 1.028 9.928 9.928 0 00-1.662 2.588C2.594 18.578 1.672 19.3 1.672 19.3a6.6 6.6 0 003.64.891c2.791 0 4.958-.739 6.1-1.882a3.911 3.911 0 001.152-2.784c0-.116-.024-.229-.034-.344l9.655-7.307.002-2.26zm-5.9.067l2.5 2.506-6.765 5.119-.808-.816 5.073-6.809zm-6.146 11.351c-.795.8-3.124 1.647-5.743 1.5a23 23 0 001.378-2.362 10.2 10.2 0 011.345-2.157 2.135 2.135 0 113.02 3.019z' />
        </svg>
    );
};

Brush.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Brush.displayName = 'Brush';
export default Brush;
