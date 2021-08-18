import React, { SVGAttributes } from 'react';

export interface Inn2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Inn2: React.FC<Inn2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.5 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7.293 1.207l7-7-1.414-1.414-7 7 1.414 1.414z' />
            <path
                fillRule='evenodd'
                d='M3 3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 1v16h14V4h-2v2h-2V4h-2v2h-2V4H9v2H7V4H5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Inn2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Inn2.displayName = 'Inn2';
export default Inn2;
