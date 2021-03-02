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
            <path
                fillRule='evenodd'
                d='M12 1a3 3 0 000 6H8v2h1v3.997-.002V13c-.003.013-.01.065-.042.166-.039.127-.1.287-.184.476-.168.378-.4.814-.642 1.238-.24.42-.483.814-.665 1.103L7.455 16H7a1 1 0 00-.97.758l-1 4A1 1 0 006 22h12a1 1 0 00.97-1.242l-1-4A1 1 0 0017 16h-.455l-.012-.018a29.71 29.71 0 01-.665-1.103 14.45 14.45 0 01-.642-1.238 4.426 4.426 0 01-.184-.476.99.99 0 01-.041-.166v-.004l-.001.002V9h1V7h-4a3 3 0 100-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0zm0 9V9h2v4c0 .486.214 1.038.399 1.453A16.383 16.383 0 0014.206 16H9.794l.074-.129c.258-.45.526-.952.733-1.418.185-.415.399-.967.399-1.453zm-3.72 7l.5-2h8.44l.5 2H7.28z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Chess.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Chess.displayName = 'Chess';
export default Chess;
