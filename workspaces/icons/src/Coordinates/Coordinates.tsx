import React, { SVGAttributes } from 'react';

export interface CoordinatesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Coordinates: React.FC<CoordinatesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M10.293 2.293a1 1 0 011.414 0l4 4-1.414 1.414L12 5.414V13h6.586l-2.293-2.293 1.414-1.414 4 4a1 1 0 010 1.414l-4 4-1.414-1.414L18.586 15H11.37l-4.667 4H9v2H4a1 1 0 01-1-1v-5h2v2.826l5-4.286V5.414L7.707 7.707 6.293 6.293l4-4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Coordinates.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Coordinates.displayName = 'Coordinates';
export default Coordinates;
