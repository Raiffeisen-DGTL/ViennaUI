import React, { SVGAttributes } from 'react';

export interface HouseWapProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HouseWap: React.FC<HouseWapProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2.068 10.895A10.013 10.013 0 0111 2.071V4.09a8.006 8.006 0 00-6.911 6.806H2.068zm19.471 4.125A10.026 10.026 0 0113 21.97v-2.02a8.016 8.016 0 006.411-4.93h2.128zM10 17.02h2v5H4v-5h2v3h4v-3zM8 9.74l6 6.005v1.275h-1.27L8 12.287 3.27 17.02H2v-1.276L8 9.74zm10-.72h2v5h-5l-2-2h5v-3zm-2-7.28l6 6.005V9.02h-1.27L16 4.287 11.27 9.02H10V7.744l6-6.004z' />
        </svg>
    );
};

HouseWap.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HouseWap.displayName = 'HouseWap';
export default HouseWap;
