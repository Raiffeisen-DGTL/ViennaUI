import React, { SVGAttributes } from 'react';

export interface OfficeSuppliesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const OfficeSupplies: React.FC<OfficeSuppliesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1v-2h2v1h12V4H7v1H5V3z' />
            <path d='M3 7v2h4V7H3zm0 6v-2h4v2H3zm0 2v2h4v-2H3z' />
        </svg>
    );
};

OfficeSupplies.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

OfficeSupplies.displayName = 'OfficeSupplies';
export default OfficeSupplies;
