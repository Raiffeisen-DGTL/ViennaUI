import React, { SVGAttributes } from 'react';

export interface SafariProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Safari: React.FC<SafariProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M17.657 6.343A8 8 0 106.343 17.657 8 8 0 0017.657 6.343zM4.929 4.93c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142zm12.02 2.121a1 1 0 01.188 1.155L14.31 13.86a.999.999 0 01-.448.448l-5.656 2.828a1 1 0 01-1.342-1.342L9.69 10.14a1 1 0 01.448-.448l5.656-2.828a1 1 0 011.155.187zm-5.618 4.281l-1.338 2.676 2.676-1.338 1.338-2.676-2.676 1.338z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Safari.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Safari.displayName = 'Safari';
export default Safari;
