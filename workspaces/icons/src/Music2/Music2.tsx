import React, { SVGAttributes } from 'react';

export interface Music2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Music2: React.FC<Music2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 4h2V2H4v3a2 2 0 102 2V4zM4 15v-4h2v4H4zm4-8v12h2V7H8zm4 15V4h2v18h-2zm10-3V7h-2v12h2zM18 9v8h-2V9h2z' />
        </svg>
    );
};

Music2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Music2.displayName = 'Music2';
export default Music2;
