import React, { SVGAttributes } from 'react';

export interface Veterinarian2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Veterinarian2: React.FC<Veterinarian2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.7 1.796a1 1 0 00-1.7.59l-.778 6.617h2.013l.51-4.334L8.786 6.71a1 1 0 00.707.293h7a1 1 0 00.707-.293l2.041-2.04.752 6.39c-.026 2.452-1.778 4.773-4 5.715V18.9c3.279-.997 6-4.257 6-7.897a.992.992 0 00-.007-.117l-1-8.5a1 1 0 00-1.7-.59l-3.207 3.207H9.907L6.7 1.796z' />
            <path
                fillRule='evenodd'
                d='M6.1 11A1.1 1.1 0 005 12.1V14H3.1A1.1 1.1 0 002 15.1v3.8A1.1 1.1 0 003.1 20H5v1.9A1.1 1.1 0 006.1 23h3.8a1.1 1.1 0 001.1-1.1V20h1.9a1.1 1.1 0 001.1-1.1v-3.8a1.1 1.1 0 00-1.1-1.1H11v-1.9A1.1 1.1 0 009.9 11H6.1zm.9 5v-3h2v3h3v2H9v3H7v-3H4v-2h3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Veterinarian2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Veterinarian2.displayName = 'Veterinarian2';
export default Veterinarian2;
