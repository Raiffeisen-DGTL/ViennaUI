import React, { SVGAttributes } from 'react';

export interface DriverLicenseProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DriverLicense: React.FC<DriverLicenseProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 11a3 3 0 114.9 2.321c1.267.472 2.1 1.431 2.1 2.679h-2c0-.2-.267-1-2-1s-2 .8-2 1H5c0-1.248.833-2.207 2.1-2.679A2.994 2.994 0 016 11zm3-1a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
            <path d='M14 11h4V9h-4v2zm3 4h-3v-2h3v2z' />
            <path
                fillRule='evenodd'
                d='M2 7a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-1a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V7a1 1 0 00-1-1H5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DriverLicense.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DriverLicense.displayName = 'DriverLicense';
export default DriverLicense;
