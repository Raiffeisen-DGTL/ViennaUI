import React, { SVGAttributes } from 'react';

export interface MapSearchProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MapSearch: React.FC<MapSearchProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M15 4.946L9.32 3.053a.993.993 0 00-.64 0L2.684 5.05A1 1 0 002 6v14a1 1 0 001.316.949l6-2A1 1 0 0010 18V5.387l4 1.334V10h2V6.72l4-1.333V11h2V4a1 1 0 00-1.316-.949L15 4.946zm-7 .441V17.28l-4 1.334V6.72l4-1.334z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M12 16.5a4.5 4.5 0 118.31 2.396l2.397 2.397-1.414 1.414-2.397-2.397A4.5 4.5 0 0112 16.5zm4.5-2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

MapSearch.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MapSearch.displayName = 'MapSearch';
export default MapSearch;
