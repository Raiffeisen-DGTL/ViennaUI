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
            <path d='M18.917 2C20.067 2 21 2.933 21 4.084v16.057A1.859 1.859 0 0119.141 22H6a2 2 0 01-2-2h15V4H4.009a2.078 2.078 0 012.074-2h12.834zM8 7h9v2H8V7zM3 5h3v2H3V5zm0 3h3v2H3V8zm0 3h3v2H3v-2zm0 3h3v2H3v-2zm0 3h3v2H3v-2z' />
        </svg>
    );
};

OfficeSupplies.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

OfficeSupplies.displayName = 'OfficeSupplies';
export default OfficeSupplies;
