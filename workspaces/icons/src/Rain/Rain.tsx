import React, { SVGAttributes } from 'react';

export interface RainProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Rain: React.FC<RainProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M9.704 1.457A6 6 0 0118 7a5 5 0 110 10H6.5a5.5 5.5 0 01-.419-10.984 6 6 0 013.623-4.56zM12 3a4 4 0 00-4 4 1 1 0 01-1 1h-.5a3.5 3.5 0 100 7H18a3 3 0 10-.853-5.876 1 1 0 01-1.257-1.192A4 4 0 0012 3z'
                clipRule='evenodd'
            />
            <path d='M21.106 23.447l-2-4 1.788-.894 2 4-1.788.894zm-12-4l2 4 1.788-.894-2-4-1.788.894zm7 4l-2-4 1.788-.894 2 4-1.788.894zm-12-4l2 4 1.788-.894-2-4-1.788.894z' />
        </svg>
    );
};

Rain.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Rain.displayName = 'Rain';
export default Rain;
