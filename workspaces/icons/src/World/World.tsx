import React, { SVGAttributes } from 'react';

export interface WorldProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const World: React.FC<WorldProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM11 4.28c-.568.316-1.145.912-1.661 1.842C8.648 7.365 8.159 9.065 8.033 11H11V4.28zm2 0V11h2.967c-.126-1.935-.615-3.635-1.306-4.878-.516-.93-1.093-1.526-1.661-1.842zM11 13H8.033c.126 1.935.615 3.634 1.306 4.878.516.93 1.093 1.526 1.661 1.842V13zm2 6.72V13h2.967c-.126 1.935-.615 3.634-1.306 4.878-.516.93-1.093 1.526-1.661 1.842zM7.445 5.423C6.655 6.955 6.15 8.892 6.029 11H4.062a7.997 7.997 0 013.383-5.577zM6.029 13H4.062a7.997 7.997 0 003.383 5.577C6.655 17.045 6.15 15.108 6.029 13zm10.526 5.577c.79-1.532 1.294-3.469 1.416-5.577h1.967a7.997 7.997 0 01-3.383 5.577zm0-13.154A7.997 7.997 0 0119.938 11h-1.967c-.122-2.108-.626-4.045-1.416-5.577z'
                clipRule='evenodd'
            />
        </svg>
    );
};

World.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

World.displayName = 'World';
export default World;
