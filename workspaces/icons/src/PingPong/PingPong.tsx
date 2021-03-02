import React, { SVGAttributes } from 'react';

export interface PingPongProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PingPong: React.FC<PingPongProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M10 2a4 4 0 00-3.688 5.55c-2.247 3.092-2.5 7.198-.334 10.058l-4.185 4.185 1.414 1.414 4.185-4.184c3.25 2.46 8.098 1.8 11.265-1.366 3.423-3.423 3.917-8.811.707-12.021-1.668-1.668-3.953-2.337-6.22-2.11A3.993 3.993 0 0010 2zM8 6a2 2 0 114 0 2 2 0 01-4 0zm-1.055 4.53c.171-.45.391-.895.66-1.326a4 4 0 006.362-3.72c1.518-.01 2.937.52 3.983 1.566 2.257 2.258 2.118 6.367-.707 9.193a7.89 7.89 0 01-2.773 1.813L6.945 10.53zm-.46 2.368c-.021 1.542.51 2.997 1.565 4.052 1.053 1.053 2.51 1.584 4.05 1.565l-5.616-5.617z'
                clipRule='evenodd'
            />
        </svg>
    );
};

PingPong.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PingPong.displayName = 'PingPong';
export default PingPong;
