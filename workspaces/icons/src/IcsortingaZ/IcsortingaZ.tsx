import React, { SVGAttributes } from 'react';

export interface IcsortingaZProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const IcsortingaZ: React.FC<IcsortingaZProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 5h18v2H3V5zm0 6h14v2H3v-2zm0 6h10v2H3v-2z' />
        </svg>
    );
};

IcsortingaZ.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

IcsortingaZ.displayName = 'IcsortingaZ';
export default IcsortingaZ;
