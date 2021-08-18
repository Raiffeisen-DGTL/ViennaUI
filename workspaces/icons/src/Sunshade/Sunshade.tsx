import React, { SVGAttributes } from 'react';

export interface SunshadeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Sunshade: React.FC<SunshadeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11 2h2v1.412l8.486 4.714A1 1 0 0121 10h-8v5.995c1.177-.013 1.835-.06 2.456-.222a7.002 7.002 0 001.769-.733c.623-.365 1.248-.9 1.863-1.5.378-.368.69-.695.997-1.016.231-.243.459-.481.708-.731l1.415 1.414c-.167.167-.377.386-.608.626-.35.367-.75.783-1.116 1.14-.656.64-1.417 1.306-2.248 1.793a8.91 8.91 0 01-.358.198l2.83 2.829-1.415 1.414-3.466-3.466c-1.08.26-2.246.26-4.147.259h-.15c-1.808 0-2.565.005-3.278.161a6.952 6.952 0 00-1.526.524 7.344 7.344 0 00-1.487.933c-.154.12-.327.259-.524.418-.415.335-.938.757-1.615 1.264l-1.2-1.6a47.95 47.95 0 001.507-1.179c.21-.17.404-.326.602-.48a9.323 9.323 0 011.854-1.16 8.997 8.997 0 011.962-.674c.869-.19 1.766-.206 3.175-.207v-6H3a1 1 0 01-.486-1.874L11 3.412V2zm6.141 6l-5.14-2.856L6.858 8H17.14z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Sunshade.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Sunshade.displayName = 'Sunshade';
export default Sunshade;
