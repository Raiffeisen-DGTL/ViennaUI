import React, { SVGAttributes } from 'react';

export interface AttentionProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Attention: React.FC<AttentionProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.866 3.911l9 15.589L21 21H3l-.866-1.5 9-15.589h1.732zM4.732 19h14.536L12 6.411 4.732 19zM11 10h2v5h-2v-5zm0 6h2v2h-2v-2z' />
        </svg>
    );
};

Attention.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Attention.displayName = 'Attention';
export default Attention;
