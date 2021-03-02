import React, { SVGAttributes } from 'react';

export interface ChatGroupProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChatGroup: React.FC<ChatGroupProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 2H6v2h14v12h2V3a1 1 0 00-1-1z' />
            <path
                fillRule='evenodd'
                d='M3 6a1 1 0 00-1 1v12a1 1 0 001 1h3v2a1 1 0 001.6.8l3.733-2.8H17a1 1 0 001-1V7a1 1 0 00-1-1H3zm1 12V8h12v10h-5a1 1 0 00-.6.2L8 20v-1a1 1 0 00-1-1H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ChatGroup.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChatGroup.displayName = 'ChatGroup';
export default ChatGroup;
