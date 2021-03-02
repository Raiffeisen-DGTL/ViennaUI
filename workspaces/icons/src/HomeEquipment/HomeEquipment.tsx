import React, { SVGAttributes } from 'react';

export interface HomeEquipmentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HomeEquipment: React.FC<HomeEquipmentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M16.337 15.49a5 5 0 110-4.98c.4.538.663 1.453.663 2.49 0 1.037-.263 1.952-.663 2.49zM9 13a3 3 0 015.333-1.886C14.125 11.63 14 12.286 14 13s.125 1.37.333 1.886A3 3 0 019 13z'
                clipRule='evenodd'
            />
            <path d='M7 6a1 1 0 112 0 1 1 0 01-2 0zm9-1a1 1 0 100 2 1 1 0 000-2zm-5 1a1 1 0 112 0 1 1 0 01-2 0z' />
            <path
                fillRule='evenodd'
                d='M4 2a1 1 0 00-1 1v18a1 1 0 001 1h16a1 1 0 001-1V3a1 1 0 00-1-1H4zm1 18V4h14v16H5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

HomeEquipment.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HomeEquipment.displayName = 'HomeEquipment';
export default HomeEquipment;
