import React, { SVGAttributes } from 'react';

export interface MagnifierProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Magnifier: React.FC<MagnifierProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22.707 21.293L21.3 22.711l-5.4-5.4a8.03 8.03 0 111.407-1.418l5.4 5.4zM11 17a6 6 0 100-12 6 6 0 000 12zm-4.709-6A4.715 4.715 0 0111 6.291V8a3 3 0 00-3 3H6.291z' />
        </svg>
    );
};

Magnifier.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Magnifier.displayName = 'Magnifier';
export default Magnifier;
