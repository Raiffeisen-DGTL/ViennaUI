import React, { SVGAttributes } from 'react';

export interface GisProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Gis: React.FC<GisProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 11h2v2H6v-2zm4 0h2v2h-2v-2zm0 4h2v2h-2v-2z' />
            <path
                fillRule='evenodd'
                d='M11 3a1 1 0 00-1 1v3H8V5H6v2H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1H11zm5 16h4V5h-8v2h6v2h-2v2h2v2h-2v2h2v2h-2v2zM4 9v10h2v-4h2v4h6V9H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Gis.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Gis.displayName = 'Gis';
export default Gis;
