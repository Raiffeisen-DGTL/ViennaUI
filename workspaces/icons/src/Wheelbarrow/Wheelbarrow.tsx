import React, { SVGAttributes } from 'react';

export interface WheelbarrowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Wheelbarrow: React.FC<WheelbarrowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 3c-.76 0-1.517.12-2.228.355A6.226 6.226 0 007.84 4.391a5.07 5.07 0 00-1.347 1.618A4.43 4.43 0 006.12 7H5.03l-.06-.243A1 1 0 004 6H1v2h2.22l1.75 7-.94 3.758 1.94.485.754-3.015 9.28 1.614a3 3 0 102.712-2.829l2.233-6.697A1 1 0 0020 7h-2.12a4.428 4.428 0 00-.373-.99 5.07 5.07 0 00-1.347-1.62 6.226 6.226 0 00-1.932-1.035A7.102 7.102 0 0012 3zm3.767 4a3.074 3.074 0 00-.856-1.048 4.228 4.228 0 00-1.312-.698A5.102 5.102 0 0012 5c-.553 0-1.097.087-1.599.254a4.228 4.228 0 00-1.312.698A3.074 3.074 0 008.233 7h7.534zm2.846 2l-2.29 6.867-9.488-1.65L5.531 9h13.082zM19 17a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Wheelbarrow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Wheelbarrow.displayName = 'Wheelbarrow';
export default Wheelbarrow;
