import React, { SVGAttributes } from 'react';

export interface CheckInfoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CheckInfo: React.FC<CheckInfoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.979 3A2.021 2.021 0 0122 5.021v14A1.979 1.979 0 0120.021 21H2a4.048 4.048 0 01.622-1.983c.207-.303.337-.652.378-1.017a2.345 2.345 0 00-.378-1.012A4.11 4.11 0 012 15a4.02 4.02 0 01.614-1.952A2.3 2.3 0 003 12a2.3 2.3 0 00-.388-1.057A3.983 3.983 0 012 9a4.1 4.1 0 01.609-1.945c.207-.318.34-.679.391-1.055a2.334 2.334 0 00-.379-1.017A4.093 4.093 0 012 3h17.979zM20 19V5H4.821c.115.321.176.659.179 1a4.2 4.2 0 01-.619 1.983A2.5 2.5 0 004 9c.042.356.17.697.372.993A4.09 4.09 0 015 12a4.1 4.1 0 01-.624 2A2.256 2.256 0 004 15c.044.374.176.732.386 1.045.368.588.58 1.262.614 1.955-.003.34-.063.679-.177 1H20zM10 7h8v2h-8V7zm0 4h6v2h-6v-2zm0 4h8v2h-8v-2zM7 7h2v2H7V7zm0 3h2v7H7v-7z' />
        </svg>
    );
};

CheckInfo.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CheckInfo.displayName = 'CheckInfo';
export default CheckInfo;
