import React, { SVGAttributes } from 'react';

export interface DownloadProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Download: React.FC<DownloadProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 16a5 5 0 001.42-9.796A7.002 7.002 0 005.055 8.112 4.002 4.002 0 006 16h3v-2H6a2 2 0 110-4 1 1 0 001-1 5 5 0 019.732-1.62 1 1 0 00.778.663A3.001 3.001 0 0117 14h-2v2h2z' />
            <path d='M11 12v6.486L9.714 17.2 8.3 18.614l3 3a1 1 0 001.414 0l3-3L14.3 17.2 13 18.5V12h-2z' />
        </svg>
    );
};

Download.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Download.displayName = 'Download';
export default Download;
