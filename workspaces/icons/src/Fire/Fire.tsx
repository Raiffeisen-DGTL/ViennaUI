import React, { SVGAttributes } from 'react';

export interface FireProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Fire: React.FC<FireProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11 2a5 5 0 100 10 5 5 0 000-10zM8 7a3 3 0 116 0 3 3 0 01-6 0z'
                clipRule='evenodd'
            />
            <path d='M11.5 13C6.09 13 3 17.598 3 22h2c0-3.598 2.473-7 6.5-7 .878 0 1.666.157 2.364.43l.73-1.86A8.424 8.424 0 0011.5 13zm6.586 6.5l-2.793-2.793 1.414-1.414 2.793 2.793 2.793-2.793 1.414 1.414-2.793 2.793 2.793 2.793-1.414 1.414-2.793-2.793-2.793 2.793-1.414-1.414 2.793-2.793z' />
        </svg>
    );
};

Fire.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fire.displayName = 'Fire';
export default Fire;
