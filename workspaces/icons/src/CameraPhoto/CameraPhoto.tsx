import React, { SVGAttributes } from 'react';

export interface CameraPhotoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CameraPhoto: React.FC<CameraPhotoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.293 3.293A1 1 0 019 3h6a1 1 0 01.707.293L17.414 5H21a1 1 0 011 1v13a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h1V4h2v1h.586l1.707-1.707zM9.414 5L7.707 6.707A1 1 0 017 7H4v11h16V7h-3a1 1 0 01-.707-.293L14.586 5H9.414z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2a4.5 4.5 0 100-9 4.5 4.5 0 000 9z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CameraPhoto.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CameraPhoto.displayName = 'CameraPhoto';
export default CameraPhoto;
