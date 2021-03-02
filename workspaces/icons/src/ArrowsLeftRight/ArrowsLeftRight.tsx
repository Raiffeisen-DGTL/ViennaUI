import React, { SVGAttributes } from 'react';

export interface ArrowsLeftRightProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowsLeftRight: React.FC<ArrowsLeftRightProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7.414 8l2.293 2.293-1.414 1.414-4-4a1 1 0 010-1.414l4-4 1.414 1.414L7.414 6H19v2H7.414zm8.293 4.293l4 4a1 1 0 010 1.414l-4 4-1.414-1.414L16.586 18H5v-2h11.586l-2.293-2.293 1.414-1.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ArrowsLeftRight.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowsLeftRight.displayName = 'ArrowsLeftRight';
export default ArrowsLeftRight;
