import React, { SVGAttributes } from 'react';

export interface GeneralEducationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const GeneralEducation: React.FC<GeneralEducationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.5 19a.5.5 0 100 1H20v2H6.5A2.5 2.5 0 014 19.5V3.953C4 2.875 4.875 2.001 5.953 2h12.094C19.126 2 20 2.874 20 3.953V19H6.5zM18 4H6v13.051A2.5 2.5 0 016.5 17H18V4zM8 6h8v2H8V6z' />
        </svg>
    );
};

GeneralEducation.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

GeneralEducation.displayName = 'GeneralEducation';
export default GeneralEducation;
