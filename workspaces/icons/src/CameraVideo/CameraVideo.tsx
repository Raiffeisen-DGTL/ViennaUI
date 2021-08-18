import React, { SVGAttributes } from 'react';

export interface CameraVideoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CameraVideo: React.FC<CameraVideoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 16a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M7 6h.17A3.001 3.001 0 0010 8h2a3 3 0 100-6h-2a3.001 3.001 0 00-2.83 2H7a3 3 0 00-3 3v3H3a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1v-.95l2.41 1.758A1 1 0 0022 21V11a1 1 0 00-1.59-.808L18 11.95V11a1 1 0 00-1-1H6V7a1 1 0 011-1zm3-2a1 1 0 000 2h2a1 1 0 100-2h-2zm6 8H4v8h12v-8zm2 5.575l2 1.458v-6.066l-2 1.458v3.15z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CameraVideo.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CameraVideo.displayName = 'CameraVideo';
export default CameraVideo;
