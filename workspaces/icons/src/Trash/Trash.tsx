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
            <path d='M7 9v11h10V9h2v12a1 1 0 01-1 1H6a1 1 0 01-1-1V9h2zm4 0v9H9V9h2zm4 0v9h-2V9h2zm0-7a1 1 0 01.949.684l.771 2.315L20 5v2H4V5l3.279-.001.772-2.315A1 1 0 019 2h6zm-.72 2H9.72l-.333.999h5.225L14.279 4z' />
        </svg>
    );
};

Trash.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Trash.displayName = 'Trash';
export default Trash;
