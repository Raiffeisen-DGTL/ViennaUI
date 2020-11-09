import React, { SVGAttributes } from 'react';

export interface SupportProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Support: React.FC<SupportProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 2a9.981 9.981 0 00-8.01 15.961l.03.039H6a2 2 0 002-2v-3a2 2 0 00-2-2H4.069a7.993 7.993 0 0115.862 0H18a2 2 0 00-2 2v3c0 .869.563 1.637 1.391 1.9a7.991 7.991 0 01-4.417 2.039l.279 1.978A10 10 0 0012 2zM6 13v3h-.894a7.908 7.908 0 01-1.024-3H6zm12 0h1.93a7.927 7.927 0 01-1.013 3H18v-3z' />
        </svg>
    );
};

Support.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Support.displayName = 'Support';
export default Support;
