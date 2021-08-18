import React, { SVGAttributes } from 'react';

export interface SignRemoveProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SignRemove: React.FC<SignRemoveProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7.609 22.02L2.59 17l6.676-6.677a6.5 6.5 0 01-.209-2.664 7.051 7.051 0 015.168-5.537A6.5 6.5 0 1115.597 15a6.4 6.4 0 01-1.917-.26L11.418 17l.605.605c.77.77.77 2.02 0 2.79l-1.625 1.625a1.972 1.972 0 01-2.789 0zM5.418 17l3.586 3.585L10.59 19l-2-2 4.592-4.592.617.254a4.5 4.5 0 10-2.457-2.455l.254.616L5.418 17zm10.086-9.3a.8.8 0 100 1.6.8.8 0 000-1.6zm0-1.7a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm6 10l1.414 1.413-2.043 2.043 2.043 2.043-1.414 1.414-2.043-2.043-2.043 2.043-1.414-1.414 2.043-2.043-2.043-2.043L17.418 16l2.043 2.043L21.504 16z' />
        </svg>
    );
};

SignRemove.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SignRemove.displayName = 'SignRemove';
export default SignRemove;
