import React, { SVGAttributes } from 'react';

export interface DicProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Dic: React.FC<DicProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7 2a3 3 0 00-3 3v16a1 1 0 001 1h12a3 3 0 003-3V7a1 1 0 00-1-1H6V5a1 1 0 011-1h13V2H7zM6 20V8h12v11a1 1 0 01-1 1H6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Dic.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Dic.displayName = 'Dic';
export default Dic;
