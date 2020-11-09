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
            <path d='M20 11h2v8.083A1.917 1.917 0 0120.083 21H3.917A1.917 1.917 0 012 19.083V11h2v8h16v-8zm-4 1.273l-4 3.999-4-3.999V11h1.273L11 12.728V2h2v10.728L14.727 11H16v1.273z' />
        </svg>
    );
};

Download.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Download.displayName = 'Download';
export default Download;
