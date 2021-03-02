import React, { SVGAttributes } from 'react';

export interface HousesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Houses: React.FC<HousesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.64 1.232a1 1 0 00-1.28 0l-6 5A1 1 0 0010 7v2h2V7.468l5-4.166 5 4.166V9h-1v4h-2V9h-2v4h-1v2h6a1 1 0 001-1V9h1V7a1 1 0 00-.36-.768l-6-5z' />
            <path
                fillRule='evenodd'
                d='M7.64 8.232a1 1 0 00-1.28 0l-6 5A1 1 0 000 14v2h1v5a1 1 0 001 1h10a1 1 0 001-1v-5h1v-2a1 1 0 00-.36-.768l-6-5zM12 16v-1.532l-5-4.166-5 4.166V16h1v4h4v-4h2v4h2v-4h1z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Houses.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Houses.displayName = 'Houses';
export default Houses;
