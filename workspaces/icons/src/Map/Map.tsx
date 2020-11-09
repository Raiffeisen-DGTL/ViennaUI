import React, { SVGAttributes } from 'react';

export interface MapProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Map: React.FC<MapProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.734 14.525c-.125.7-.117 1.42.025 2.117L9 16.055l-7 2.334V3.281L9 .948l6.017 2.005L22 .867v12.88a5.816 5.816 0 00-2-2.847V3.547l-4 1.2v4.965a5.784 5.784 0 00-2 .528V4.722l-4-1.334v10.893l.734.244zM8 14.281V3.388L4 4.722v10.892l4-1.333zm14.915 6.471L21.5 22.166l-2.775-2.775a4.634 4.634 0 111.483-1.346l2.707 2.707zM13.8 15.5a2.7 2.7 0 105.4 0 2.7 2.7 0 00-5.4 0z' />
        </svg>
    );
};

Map.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Map.displayName = 'Map';
export default Map;
