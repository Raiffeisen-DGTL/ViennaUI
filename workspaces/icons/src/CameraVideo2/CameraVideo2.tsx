import React, { SVGAttributes } from 'react';

export interface CameraVideo2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CameraVideo2: React.FC<CameraVideo2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 15a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M3.6 2.2A1 1 0 002 3v4h2V5l2.4 1.8A1 1 0 007 7h6a1 1 0 011 1v1H3a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1v-2.409l2.545 1.3A1 1 0 0022 18v-7a1 1 0 00-1.455-.89L18 11.408V10a1 1 0 00-1-1h-1V8a3 3 0 00-3-3H7.333L3.6 2.2zM18 15.346v-1.692l2-1.02v3.733l-2-1.021zM16 11v8H4v-8h12z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CameraVideo2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CameraVideo2.displayName = 'CameraVideo2';
export default CameraVideo2;
