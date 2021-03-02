import React, { SVGAttributes } from 'react';

export interface TerminalOnMapProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TerminalOnMap: React.FC<TerminalOnMapProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 7a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M12 2a9 9 0 00-9 9c0 3.387 1.964 6.253 3.918 8.207.99.99 2.014 1.784 2.867 2.336.426.275.821.498 1.16.657.168.08.334.148.492.2.14.045.344.1.563.1.22 0 .423-.055.563-.1.158-.052.324-.12.493-.2a10.12 10.12 0 001.16-.657 17.947 17.947 0 002.866-2.336C19.036 17.253 21 14.387 21 11a9 9 0 00-9-9zm-7 9a7 7 0 0114 0c0 2.613-1.536 4.997-3.332 6.793a15.962 15.962 0 01-2.54 2.07 8.16 8.16 0 01-.922.527c-.085.04-.154.068-.206.088a2.86 2.86 0 01-.206-.088 8.16 8.16 0 01-.923-.526 15.963 15.963 0 01-2.539-2.071C6.536 15.997 5 13.613 5 11zm6.907 9.508h.004-.004zm.186 0h-.004.004z'
                clipRule='evenodd'
            />
        </svg>
    );
};

TerminalOnMap.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TerminalOnMap.displayName = 'TerminalOnMap';
export default TerminalOnMap;
