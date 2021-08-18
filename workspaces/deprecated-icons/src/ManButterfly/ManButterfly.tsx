import React, { SVGAttributes } from 'react';

export interface ManButterflyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ManButterfly: React.FC<ManButterflyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 11a4 4 0 01-4-4V6a4 4 0 118 0v1a4 4 0 01-4 4zm0-7a2 2 0 00-2 2v1a2 2 0 104 0V6a2 2 0 00-2-2zm3 12l-3-1.55L9 16v-4l3 1.56L15 12v4zm3.41-1.23L19.79 21h-2.05l-1.29-5.8a1.47 1.47 0 00-.45-.77v-2.26a3.5 3.5 0 012.41 2.6zM8 12.16v2.24a1.6 1.6 0 00-.48.8L6.24 21H4.19l1.38-6.23A3.5 3.5 0 018 12.16z' />
        </svg>
    );
};

ManButterfly.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ManButterfly.displayName = 'ManButterfly';
export default ManButterfly;
