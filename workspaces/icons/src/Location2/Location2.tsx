import React, { SVGAttributes } from 'react';

export interface Location2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Location2: React.FC<Location2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 14a2 2 0 100-4 2 2 0 000 4z' />
            <path
                fillRule='evenodd'
                d='M13 0v2.05A10.003 10.003 0 0121.95 11H24v2h-2.05A10.003 10.003 0 0113 21.95V24h-2v-2.05A10.003 10.003 0 012.05 13H0v-2h2.05A10.003 10.003 0 0111 2.05V0h2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Location2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Location2.displayName = 'Location2';
export default Location2;
