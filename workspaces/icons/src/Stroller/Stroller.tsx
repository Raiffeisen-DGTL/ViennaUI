import React, { SVGAttributes } from 'react';

export interface StrollerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Stroller: React.FC<StrollerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 3a1 1 0 011-1h3a6 6 0 016 6v2a5 5 0 01-5 5H9a5 5 0 01-5-5V8a2 2 0 00-2-2V4a4 4 0 014 4h6V3zm-6 7a3 3 0 003 3h8a3 3 0 003-3V8a4 4 0 00-4-4h-2v5a1 1 0 01-1 1H6zm-2 9a3 3 0 015.83-1h5.34a3.001 3.001 0 110 2H9.83A3.001 3.001 0 014 19zm3-1a1 1 0 100 2 1 1 0 000-2zm10 1a1 1 0 112 0 1 1 0 01-2 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Stroller.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Stroller.displayName = 'Stroller';
export default Stroller;
