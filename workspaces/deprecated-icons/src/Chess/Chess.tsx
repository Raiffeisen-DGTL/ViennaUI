import React, { SVGAttributes } from 'react';

export interface ChessProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Chess: React.FC<ChessProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 19H6v-1.599c1.825-.425 3-2.228 3-4.755V10H7.917V8h8.167v2H15v2.646c0 2.527 1.175 4.33 3 4.754V19zm-3.806-2C13.433 15.849 13 14.357 13 12.646V10h-2v2.646c0 1.71-.433 3.203-1.194 4.354h4.388zM12 3.7a1.3 1.3 0 100 2.6 1.3 1.3 0 000-2.6zM12 2a3 3 0 110 6 3 3 0 010-6zM6 20h12l1 1v1H5v-1l1-1z' />
        </svg>
    );
};

Chess.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Chess.displayName = 'Chess';
export default Chess;
