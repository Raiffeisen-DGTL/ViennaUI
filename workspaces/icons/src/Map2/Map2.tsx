import React, { SVGAttributes } from 'react';

export interface Map2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Map2: React.FC<Map2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M21.585 3.189A1 1 0 0122 4v14a1 1 0 01-.553.894l-6 3a1 1 0 01-.894 0l-5.63-2.814-5.607 1.869A1 1 0 012 20V6a1 1 0 01.684-.949l6-2a1 1 0 01.632 0L15 4.946l5.684-1.895a1 1 0 01.9.138zM14 6.72l-4-1.334v11.995l4 2V6.721zm2 12.661l4-2V5.387l-4 1.334v12.661zm-8-2.103V5.387L4 6.721v11.892l4-1.334z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Map2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Map2.displayName = 'Map2';
export default Map2;
