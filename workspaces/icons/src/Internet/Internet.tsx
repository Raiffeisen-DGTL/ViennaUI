import React, { SVGAttributes } from 'react';

export interface InternetProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Internet: React.FC<InternetProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.198 6.18a15.126 15.126 0 00-4.913 3.356l1.43 1.399a13.125 13.125 0 014.263-2.913A12.872 12.872 0 0112 7c1.723 0 3.43.347 5.022 1.022a13.126 13.126 0 014.263 2.913l1.43-1.399a15.125 15.125 0 00-4.913-3.356A14.872 14.872 0 0012 5c-1.992 0-3.963.401-5.802 1.18z' />
            <path d='M7.744 9.997a11.09 11.09 0 00-3.602 2.46l1.43 1.4a9.09 9.09 0 012.952-2.018 8.909 8.909 0 016.952 0 9.09 9.09 0 012.952 2.017l1.43-1.398a11.089 11.089 0 00-3.602-2.46 10.909 10.909 0 00-8.512 0z' />
            <path d='M9.29 13.814A7.055 7.055 0 007 15.38l1.43 1.399a5.054 5.054 0 011.64-1.122 4.945 4.945 0 013.86 0c.612.26 1.17.64 1.64 1.122l1.43-1.4a7.054 7.054 0 00-2.29-1.565 6.946 6.946 0 00-5.42 0zM12 21a2 2 0 100-4 2 2 0 000 4z' />
        </svg>
    );
};

Internet.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Internet.displayName = 'Internet';
export default Internet;
