import React, { SVGAttributes } from 'react';

export interface WatchAppleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const WatchApple: React.FC<WatchAppleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.03 1.757A1 1 0 019 1h6a1 1 0 01.97.757l.838 3.353A3.001 3.001 0 0119 8v8a3.001 3.001 0 01-2.192 2.89l-.838 3.352A1 1 0 0115 23H9a1 1 0 01-.97-.758l-.838-3.352A3.001 3.001 0 015 16V8a3 3 0 012.192-2.89l.838-3.353zM9.28 5h5.44l-.5-2H9.78l-.5 2zm0 14l.5 2h4.44l.5-2H9.28zM7 8a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V8z'
                clipRule='evenodd'
            />
        </svg>
    );
};

WatchApple.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

WatchApple.displayName = 'WatchApple';
export default WatchApple;
