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
            <path d='M11 0h2v3h-2V0zm0 24v-3h2v3h-2zm10-11h3v-2h-3v2zM3 11v2H0v-2h3zm16.778 10.192l1.414-1.414-2.12-2.121-1.415 1.414 2.121 2.121zM6.343 4.929L4.929 6.343 2.807 4.222l1.414-1.414 2.122 2.12zM2.807 19.778l1.415 1.414 2.121-2.121-1.414-1.414-2.122 2.121zM19.071 6.343l-1.414-1.415 2.121-2.12 1.415 1.413-2.122 2.122z' />
            <path
                fillRule='evenodd'
                d='M12 5a7 7 0 100 14 7 7 0 000-14zm-5 7a5 5 0 1110 0 5 5 0 01-10 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Sun.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Sun.displayName = 'Sun';
export default Sun;
