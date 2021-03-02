import React, { SVGAttributes } from 'react';

export interface VolleyballProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Volleyball: React.FC<VolleyballProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4.084 10.835a19.4 19.4 0 017.146.549l1.176-1.098c.218-.203.424-.416.62-.638a9 9 0 00-7.134-1.215l-1.196.299a7.944 7.944 0 00-.612 2.104zm-.807-3.728A9.955 9.955 0 002 12c0 5.523 4.477 10 10 10s10-4.477 10-10a9.978 9.978 0 00-.631-3.504l.016-.03-.034-.018A10.004 10.004 0 003.33 7.01l-.074.019.02.077zm3.116-.814c2.716-.42 5.492.193 7.778 1.715.362-.665.64-1.377.826-2.119l.296-1.182A7.97 7.97 0 0012 4a7.974 7.974 0 00-5.607 2.293zm10.684-.476l-.14.558a11 11 0 01-3.166 5.373l-1.013.945a19.03 19.03 0 001.345 2.003l1.733-1.444a9.001 9.001 0 002.203-2.723l1.114-2.116a8.034 8.034 0 00-2.076-2.596zm2.881 5.36l-.15.284a11 11 0 01-2.691 3.327l-1.715 1.429a18.993 18.993 0 001.915 1.76 7.98 7.98 0 002.641-6.8zm-4.364 7.972a21.077 21.077 0 01-4.717-5.717l-.048-.084a17.388 17.388 0 00-2.591-.508l.019.15a9 9 0 003.133 5.768l1.426 1.2c.99-.1 1.928-.38 2.778-.809zm-6.307.38a11 11 0 01-3.015-6.291l-.065-.518c-.721 0-1.443.044-2.162.134a8.008 8.008 0 005.242 6.674z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Volleyball.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Volleyball.displayName = 'Volleyball';
export default Volleyball;
