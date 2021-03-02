import React, { SVGAttributes } from 'react';

export interface ATMProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ATM: React.FC<ATMProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 20h3v2H2v-2h3V3.982C5 2.888 5.888 2.001 6.982 2h10.036c1.094 0 1.981.888 1.982 1.982V20zM17.016 4H7v1h10.016V4zM7 20h10.016V7H7v13zm2-4.844h6v1.688H9v-1.688zM8 14V8h8v6H8zm1.7-4.3v2.6h4.6V9.7H9.7z' />
        </svg>
    );
};

ATM.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ATM.displayName = 'ATM';
export default ATM;
