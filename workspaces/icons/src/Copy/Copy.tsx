import React, { SVGAttributes } from 'react';

export interface CopyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Copy: React.FC<CopyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 4.938V5H5v13h-.063A1.937 1.937 0 013 16.063V4.938A1.937 1.937 0 014.937 3h11.125A1.937 1.937 0 0118 4.938zM19.062 6A1.937 1.937 0 0121 7.938v11.125A1.937 1.937 0 0119.062 21H7.937A1.937 1.937 0 016 19.063V7.938A1.937 1.937 0 017.937 6h11.125zM19 19V8H8v11h11z' />
        </svg>
    );
};

Copy.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Copy.displayName = 'Copy';
export default Copy;
