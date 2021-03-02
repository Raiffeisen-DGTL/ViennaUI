import React, { SVGAttributes } from 'react';

export interface FaceSmileProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const FaceSmile: React.FC<FaceSmileProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 16a3.987 3.987 0 01-2.961-1.31l-1.48 1.344A5.987 5.987 0 0011.999 18c1.761 0 3.346-.76 4.442-1.966l-1.48-1.345A3.987 3.987 0 0112 16z' />
            <path
                fillRule='evenodd'
                d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

FaceSmile.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

FaceSmile.displayName = 'FaceSmile';
export default FaceSmile;
