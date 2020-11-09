import React, { SVGAttributes } from 'react';

export interface PhoneHomeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PhoneHome: React.FC<PhoneHomeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.98 4.8h-.157C8.962 4.674 6.14 5.5 3.8 7.152V10.2h2.4V8.214A15.488 15.488 0 0111.96 7c2.007.023 3.99.435 5.84 1.214V10.2h2.4V7.156A14.285 14.285 0 0011.98 4.8zM12 3c7.781 0 10 3.756 10 3.756v3.23A2.016 2.016 0 0119.982 12h-1.966A2.015 2.015 0 0116 9.984V9.25a11.116 11.116 0 00-4.007-.781h-.026A11.2 11.2 0 008 9.25v.734A2.015 2.015 0 015.984 12H4.017A2.016 2.016 0 012 9.983V6.756S4 3 12 3zm5.641 10H20l1 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4l1.229-2H6.4L5 15.353V19h14v-3.647L17.641 13zM8 13h2v2H8v-2zm3 0h2v2h-2v-2zm-3 3h2v2H8v-2zm3 0h2v2h-2v-2zm3-3h2v2h-2v-2zm0 3h2v2h-2v-2z' />
        </svg>
    );
};

PhoneHome.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PhoneHome.displayName = 'PhoneHome';
export default PhoneHome;
