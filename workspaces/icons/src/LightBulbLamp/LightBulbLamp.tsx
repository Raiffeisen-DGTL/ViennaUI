import React, { SVGAttributes } from 'react';

export interface LightBulbLampProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const LightBulbLamp: React.FC<LightBulbLampProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.068 10.518a2 2 0 012.45-2.45l.517-1.932a4 4 0 00-4.899 4.9l1.932-.518z' />
            <path
                fillRule='evenodd'
                d='M7.13 3.653A8 8 0 0117 16.245V17a2 2 0 01-2 2H9a2 2 0 01-2-2v-.755a8 8 0 01.13-12.592zM12 4a6 6 0 00-3.429 10.924l.429.298V17h6v-1.778l.429-.298A6 6 0 0012 4z'
                clipRule='evenodd'
            />
            <path d='M15 23H9v-2h6v2z' />
        </svg>
    );
};

LightBulbLamp.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

LightBulbLamp.displayName = 'LightBulbLamp';
export default LightBulbLamp;
