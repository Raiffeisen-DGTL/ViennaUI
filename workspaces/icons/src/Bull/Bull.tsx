import React, { SVGAttributes } from 'react';

export interface BullProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bull: React.FC<BullProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4.44 4.44A1.5 1.5 0 015.5 4V2a3.5 3.5 0 100 7h.882l-.906 1.812c-.03.062-.06.125-.086.188H2v2h3.281l.032.102 2.282 6.847A3 3 0 0010.441 22h3.117a3 3 0 002.846-2.051l2.283-6.847.032-.102H22v-2h-3.39a3.003 3.003 0 00-.086-.188L17.618 9h.882a3.5 3.5 0 100-7v2a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.06-2.56zM14.763 9H9.236a1 1 0 00-.894.553l-1.077 2.153a1 1 0 00-.054.764l2.282 6.846a1 1 0 00.948.684h3.117a1 1 0 00.95-.684l2.281-6.846a1 1 0 00-.054-.764l-1.077-2.153A1 1 0 0014.764 9z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Bull.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bull.displayName = 'Bull';
export default Bull;
