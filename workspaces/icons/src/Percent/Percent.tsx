import React, { SVGAttributes } from 'react';

export interface PercentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Percent: React.FC<PercentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3.793 18.793l15-15 1.414 1.414-15 15-1.414-1.414zM6.75 5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM3 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm14.25 8.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm-3.75 1.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Percent.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Percent.displayName = 'Percent';
export default Percent;
