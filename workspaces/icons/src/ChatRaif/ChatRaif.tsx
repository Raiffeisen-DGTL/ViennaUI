import React, { SVGAttributes } from 'react';

export interface ChatRaifProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChatRaif: React.FC<ChatRaifProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 12.624L8.354 16.3l-1.446-1.457 3.646-3.677-.76-.768V8.882l-.529-.533v1.322l-.46.464L6.957 8.27l-.457.461a3.136 3.136 0 01.918-2.193c.914-.886 1.9-.487 2.237-.146l1.848 1.863-.472.475.969.977.968-.977-.47-.475 1.846-1.863c.338-.341 1.324-.74 2.237.146.847.839.916 1.845.919 2.193l-.457-.461-1.849 1.865-.46-.464V8.349l-.528.533v1.516l-.76.768 3.646 3.677-1.446 1.457L12 12.624z' />
            <path
                fillRule='evenodd'
                d='M3 2a1 1 0 00-1 1v16a1 1 0 001 1h4v2a1 1 0 001.6.8l3.733-2.8H21a1 1 0 001-1V3a1 1 0 00-1-1H3zm1 16V4h16v14h-8a1 1 0 00-.6.2L9 20v-1a1 1 0 00-1-1H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ChatRaif.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChatRaif.displayName = 'ChatRaif';
export default ChatRaif;
