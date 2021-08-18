import React, { SVGAttributes } from 'react';

export interface LocationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Location: React.FC<LocationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M21.714 2.286a.976.976 0 01.215 1.056L14.61 21.391a.975.975 0 01-1.856-.155l-1.817-8.174-8.174-1.817a.976.976 0 01-.155-1.856l18.049-7.317a.976.976 0 011.056.214zM6.245 10.02l5.723 1.271c.37.083.658.371.74.741l1.272 5.723 5.274-13.009L6.245 10.02z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Location.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Location.displayName = 'Location';
export default Location;
