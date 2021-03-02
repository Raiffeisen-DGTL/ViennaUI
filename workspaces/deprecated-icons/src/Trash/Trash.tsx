import React, { SVGAttributes } from 'react';

export interface TrashProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Trash: React.FC<TrashProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 4h7v2H3V4h7.062V2H14v2zm3 16V7h2v13.063A1.937 1.937 0 0117.062 22H6.969A1.969 1.969 0 015 20.031V7h2v13h10zM9 8h2v10H9V8zm4 0h2v10h-2V8z' />
        </svg>
    );
};

Trash.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Trash.displayName = 'Trash';
export default Trash;
