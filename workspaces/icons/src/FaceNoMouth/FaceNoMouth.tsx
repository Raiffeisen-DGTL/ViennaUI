import React, { SVGAttributes } from 'react';

export interface FaceNoMouthProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const FaceNoMouth: React.FC<FaceNoMouthProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
            <path
                fillRule='evenodd'
                d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

FaceNoMouth.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

FaceNoMouth.displayName = 'FaceNoMouth';
export default FaceNoMouth;
