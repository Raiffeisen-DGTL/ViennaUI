import React, { SVGAttributes } from 'react';

export interface DownProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Down: React.FC<DownProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 7h-1.414L12 14.586 4.414 7H3v1.414l9 9 9-9z' />
        </svg>
    );
};

Down.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Down.displayName = 'Down';
export default Down;
