import React, { SVGAttributes } from 'react';

export interface ChatProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Chat: React.FC<ChatProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 2a2 2 0 012 2v12a2 2 0 01-2 2h-7.586l-4 4H7v-1.414L11.586 16H20V4H4v12h3v2H4a2 2 0 01-2-2V4a2 2 0 012-2h16zM7 7h10v2H7V7zm0 4h10v2H7v-2z' />
        </svg>
    );
};

Chat.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Chat.displayName = 'Chat';
export default Chat;
