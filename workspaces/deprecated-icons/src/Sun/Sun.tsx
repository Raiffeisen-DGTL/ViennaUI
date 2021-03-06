import React, { SVGAttributes } from 'react';

export interface SunProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Sun: React.FC<SunProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.979 5a7.008 7.008 0 017 7 7 7 0 11-7-7zm0 12a5 5 0 100-10 5 5 0 000 10zm-.833-16h1.708v3h-1.708V1zm0 19h1.708v3h-1.708v-3zm5.896-14.27l2.121-2.122 1.228 1.228-2.12 2.121-1.23-1.228zM3.607 19.163l2.121-2.121 1.228 1.228-2.12 2.121-1.23-1.228zm13.435-.894l1.228-1.228 2.121 2.121-1.228 1.228-2.121-2.121zM3.607 4.835l1.228-1.228 2.121 2.121-1.228 1.228-2.121-2.121zM20 11.146h3v1.708h-3v-1.708zm-19 0h3v1.708H1v-1.708z' />
        </svg>
    );
};

Sun.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Sun.displayName = 'Sun';
export default Sun;
