import React, { SVGAttributes } from 'react';

export interface TourismProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tourism: React.FC<TourismProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.414 3l3 3-3 3H13v10h-2v-6H4.586l-3-3 3-3H11V2h2v1h6.414zM11 11V9H5.414l-1 1 1 1H11zm7.586-4l1-1-1-1H13v2h5.586zM7 19.999h10l1 1v1H6v-1l1-1z' />
        </svg>
    );
};

Tourism.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tourism.displayName = 'Tourism';
export default Tourism;
