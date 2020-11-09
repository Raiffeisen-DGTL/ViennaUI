import React, { SVGAttributes } from 'react';

export interface RewindRightProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RewindRight: React.FC<RewindRightProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 4.414V3h1.414l9 9-9 9H8v-1.414L15.586 12 8 4.414zM4 3h2v18H4V3z' />
        </svg>
    );
};

RewindRight.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RewindRight.displayName = 'RewindRight';
export default RewindRight;
