import React, { SVGAttributes } from 'react';

export interface EyeClosedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const EyeClosed: React.FC<EyeClosedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7.662 5.955L5.707 4 4.293 5.414l1.694 1.694C4.721 8.123 3.461 9.456 2.205 11.1a1 1 0 000 1.214c3.225 4.223 6.48 6.393 9.795 6.393 1.457 0 2.902-.419 4.338-1.247l1.955 1.954L19.707 18l-1.694-1.694c1.266-1.015 2.526-2.348 3.782-3.992a1 1 0 000-1.214C18.57 6.877 15.315 4.707 12 4.707c-1.457 0-2.902.42-4.338 1.248zM7.41 8.532c-1.027.794-2.074 1.85-3.14 3.175 2.71 3.366 5.295 5 7.729 5 .932 0 1.886-.24 2.861-.724L7.41 8.532zm9.178 6.35l-7.45-7.45c.975-.485 1.929-.725 2.861-.725 2.434 0 5.019 1.634 7.73 5-1.067 1.325-2.114 2.381-3.14 3.175z'
                clipRule='evenodd'
            />
        </svg>
    );
};

EyeClosed.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

EyeClosed.displayName = 'EyeClosed';
export default EyeClosed;
