import React, { SVGAttributes } from 'react';

export interface CheckMarkProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CheckMark: React.FC<CheckMarkProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 19.414l12-12V6h-1.414L10 16.586 3.414 10H2v1.414z' />
        </svg>
    );
};

CheckMark.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CheckMark.displayName = 'CheckMark';
export default CheckMark;
