import React, { SVGAttributes } from 'react';

export interface GosuslugiServicesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const GosuslugiServices: React.FC<GosuslugiServicesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 12a3 3 0 015.83-1H17a1 1 0 011 1v3h-2v-2h-4.17A3.001 3.001 0 016 12zm3-1a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M10.375 1.628a4 4 0 013.25 0l6 2.666A4 4 0 0122 7.95v8.1a4 4 0 01-2.375 3.656l-6 2.666a4 4 0 01-3.25 0l-6-2.666A4 4 0 012 16.05v-8.1a4 4 0 012.375-3.656l6-2.666zm2.437 1.827a2 2 0 00-1.624 0l-6 2.667A2 2 0 004 7.95v8.1a2 2 0 001.188 1.828l6 2.667a2 2 0 001.624 0l6-2.667A2 2 0 0020 16.05v-8.1a2 2 0 00-1.188-1.828l-6-2.667z'
                clipRule='evenodd'
            />
        </svg>
    );
};

GosuslugiServices.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

GosuslugiServices.displayName = 'GosuslugiServices';
export default GosuslugiServices;
