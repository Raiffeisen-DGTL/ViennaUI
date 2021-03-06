import React, { SVGAttributes } from 'react';

export interface Bear1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bear1: React.FC<Bear1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.942 10.09l-2.39-1.196.895-1.788 3 1.5a1 1 0 01.549.985L10.595 14h2.81l-.4-4.41a1 1 0 01.548-.984l3-1.5.894 1.788-2.39 1.195.439 4.82A1 1 0 0114.5 16h-5a1 1 0 01-.996-1.09l.438-4.82z' />
            <path
                fillRule='evenodd'
                d='M2 6a4 4 0 016.233-3.32C9.293 2.283 10.554 2 12 2c1.446 0 2.707.282 3.767.68a4 4 0 014.857 6.338l1.357 6.786a1 1 0 01-.107.682l-.002.004-.004.006-.01.018a4.444 4.444 0 01-.15.243c-.1.157-.248.374-.445.631a12.165 12.165 0 01-1.784 1.874C17.871 20.627 15.4 22 12 22c-3.4 0-5.871-1.373-7.48-2.738a12.162 12.162 0 01-1.783-1.874 9.825 9.825 0 01-.563-.819 4.666 4.666 0 01-.032-.055l-.01-.018-.004-.006v-.002l-.001-.001L3 16c-.874.486-.873.487-.873.487a1.003 1.003 0 01-.108-.683l1.357-6.785A3.991 3.991 0 012 6zm2.059 9.804a10.157 10.157 0 001.756 1.934A9.363 9.363 0 0012 20a9.363 9.363 0 006.185-2.262 10.16 10.16 0 001.489-1.564c.108-.142.197-.268.267-.37l-1.404-7.02a1 1 0 01.474-1.058 2 2 0 10-2.39-3.174 1 1 0 01-1.096.19A8.621 8.621 0 0012 4a8.62 8.62 0 00-3.525.742 1 1 0 01-1.095-.19 2 2 0 10-2.39 3.174 1 1 0 01.473 1.058l-1.404 7.02z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Bear1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bear1.displayName = 'Bear1';
export default Bear1;
