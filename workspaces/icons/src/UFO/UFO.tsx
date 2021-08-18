import React, { SVGAttributes } from 'react';

export interface UFOProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const UFO: React.FC<UFOProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13 2v3.07A7.004 7.004 0 0118.93 11H22a1 1 0 01.743 1.669l-4.102 4.558 3.566 3.566-1.414 1.414L16.586 18H13v4h-2v-4H7.414l-4.207 4.207-1.414-1.414 3.566-3.566-4.102-4.558A1 1 0 012 11h3.07A7.005 7.005 0 0111 5.07V2h2zm-5.9 9a5.002 5.002 0 019.8 0H7.1zm-.155 5l-2.7-3h15.51l-2.7 3H6.945z'
                clipRule='evenodd'
            />
        </svg>
    );
};

UFO.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

UFO.displayName = 'UFO';
export default UFO;
