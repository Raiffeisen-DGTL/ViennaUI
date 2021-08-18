import React, { SVGAttributes } from 'react';

export interface Chat2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Chat2: React.FC<Chat2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 3a1 1 0 011 1v14a1 1 0 01-1 1h-7.667L8.6 21.8A1 1 0 017 21v-2H4a1 1 0 01-1-1V4a1 1 0 011-1h16zm-1 2H5v12h3a1 1 0 011 1v1l2.4-1.8a1 1 0 01.6-.2h7V5zm-4 7v2H7v-2h8zm2-4v2H7V8h10z' />
        </svg>
    );
};

Chat2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Chat2.displayName = 'Chat2';
export default Chat2;
