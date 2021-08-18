import React, { SVGAttributes } from 'react';

export interface MobileConnectingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MobileConnecting: React.FC<MobileConnectingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 4H6v16h10v-5h2v5a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h9v2z' />
            <path d='M11 18a1 1 0 100-2 1 1 0 000 2zm5.828-12.828a3.999 3.999 0 010 5.656l-1.414-1.414a2 2 0 000-2.828l1.414-1.414z' />
            <path d='M21.391 4.939a8 8 0 00-1.734-2.596l-1.414 1.414a5.999 5.999 0 010 8.486l1.414 1.414a8 8 0 001.734-8.718z' />
        </svg>
    );
};

MobileConnecting.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MobileConnecting.displayName = 'MobileConnecting';
export default MobileConnecting;
