import React, { SVGAttributes } from 'react';

export interface RewindLeftProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RewindLeft: React.FC<RewindLeftProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 3v1.415L7.415 12 15 19.585V21h-1.413l-9-9 9-9H15zm2 0h2v18h-2V3z' />
        </svg>
    );
};

RewindLeft.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RewindLeft.displayName = 'RewindLeft';
export default RewindLeft;
