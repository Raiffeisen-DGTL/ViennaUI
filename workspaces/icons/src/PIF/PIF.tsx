import React, { SVGAttributes } from 'react';

export interface PIFProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PIF: React.FC<PIFProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.021 2C21.114 2 22 2.886 22 3.979v14.042A1.979 1.979 0 0120.021 20H20V4H7v-.021C7 2.886 7.886 2 8.979 2h11.042zm-3 3C18.114 5 19 5.886 19 6.979v13.042A1.979 1.979 0 0117.021 22H11v-2h6V7H6v3H4V6.979C4 5.886 4.886 5 5.979 5h11.042zM7 17H5.656v1.281H10V20H5.656v2H4v-2H2v-1.719h2V17H2v-1.687h2V11h4a3 3 0 010 6H7zm-1.3-4.3v2.6H8a1.3 1.3 0 100-2.6H5.7z' />
        </svg>
    );
};

PIF.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PIF.displayName = 'PIF';
export default PIF;
