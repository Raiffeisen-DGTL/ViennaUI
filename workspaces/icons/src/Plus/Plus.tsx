import React, { SVGAttributes } from 'react';

export interface PlusProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Plus: React.FC<PlusProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.996 10.986H21v1.997h-8.004V21h-2v-8.017H3v-1.997h7.997V3h1.999v7.986z' />
        </svg>
    );
};

Plus.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Plus.displayName = 'Plus';
export default Plus;
