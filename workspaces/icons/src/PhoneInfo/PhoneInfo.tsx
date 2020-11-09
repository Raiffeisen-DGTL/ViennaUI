import React, { SVGAttributes } from 'react';

export interface PhoneInfoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PhoneInfo: React.FC<PhoneInfoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 12h1v2h-4v-2h1v-2h-1V8h3v4zm3.021-10C17.114 2 18 2.886 18 3.979v16.063A1.958 1.958 0 0116.042 22h-8.03C6.901 22 6 21.1 6 19.988V4.012C6 2.901 6.9 2 8.012 2h8.009zM16 20V4H8v16h8zm-5-3h2v2h-2v-2zm0-12h2v2h-2V5z' />
        </svg>
    );
};

PhoneInfo.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PhoneInfo.displayName = 'PhoneInfo';
export default PhoneInfo;
