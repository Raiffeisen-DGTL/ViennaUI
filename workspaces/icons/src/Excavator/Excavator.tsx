import React, { SVGAttributes } from 'react';

export interface ExcavatorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Excavator: React.FC<ExcavatorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M21.424 2.094A1 1 0 0122 3v10a1 1 0 01-1 1h-3v-2h2V5.135l-4 3.333V13a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h1V3a1 1 0 011-1h5a1 1 0 01.707.293l3.9 3.9 4.753-3.961a1 1 0 011.064-.138zM5 12v-2h1a1 1 0 001-1V4h3.586L14 7.414V12H5zm-2 7a3 3 0 013-3h12a3 3 0 110 6H6a3 3 0 01-3-3zm3-1a1 1 0 100 2h12a1 1 0 100-2H6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Excavator.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Excavator.displayName = 'Excavator';
export default Excavator;
