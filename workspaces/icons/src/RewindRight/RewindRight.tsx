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
            <path d='M10.293 4.707L17.586 12l-7.293 7.293 1.414 1.414 8-8a1 1 0 000-1.414l-8-8-1.414 1.414zM8 3.5v17H6v-17h2z' />
        </svg>
    );
};

RewindRight.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RewindRight.displayName = 'RewindRight';
export default RewindRight;
