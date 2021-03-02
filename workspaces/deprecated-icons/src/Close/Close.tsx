import React, { SVGAttributes } from 'react';

export interface CloseProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Close: React.FC<CloseProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.586 12L4 18.586V20h1.414L12 13.414 18.586 20H20v-1.414L13.414 12 20 5.414V4h-1.414L12 10.586 5.414 4H4v1.414z' />
        </svg>
    );
};

Close.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Close.displayName = 'Close';
export default Close;
