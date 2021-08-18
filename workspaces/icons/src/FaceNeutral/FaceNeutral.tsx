import React, { SVGAttributes } from 'react';

export interface FaceNeutralProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const FaceNeutral: React.FC<FaceNeutralProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 14v2h8v-2H8z' />
            <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

FaceNeutral.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

FaceNeutral.displayName = 'FaceNeutral';
export default FaceNeutral;
