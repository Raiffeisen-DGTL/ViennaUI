import React, { SVGAttributes } from 'react';

export interface ChatAskProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChatAsk: React.FC<ChatAskProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.512 6.847c-.575.51-.87 1.196-.889 2.057h1.853c.022-.387.154-.695.396-.923.242-.232.558-.348.95-.348.388 0 .702.105.944.314.237.21.355.479.355.807 0 .323-.082.59-.246.8-.16.21-.46.446-.902.71-.479.283-.814.59-1.005.924-.196.35-.271.79-.226 1.319l.014.396h1.811v-.362c0-.337.08-.61.24-.82.16-.21.467-.447.922-.711.976-.575 1.463-1.347 1.463-2.318 0-.783-.296-1.42-.888-1.907-.602-.492-1.388-.738-2.359-.738-1.03 0-1.84.266-2.433.8zm1.388 9.009c.214.21.476.315.785.315.31 0 .575-.105.793-.315a.998.998 0 00.329-.758c0-.301-.11-.556-.329-.766a1.118 1.118 0 00-.793-.308c-.31 0-.571.103-.786.308a1.02 1.02 0 00-.328.766 1 1 0 00.328.758z' />
            <path
                fillRule='evenodd'
                d='M3 2a1 1 0 00-1 1v16a1 1 0 001 1h4v2a1 1 0 001.6.8l3.733-2.8H21a1 1 0 001-1V3a1 1 0 00-1-1H3zm1 16V4h16v14h-8a1 1 0 00-.6.2L9 20v-1a1 1 0 00-1-1H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ChatAsk.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChatAsk.displayName = 'ChatAsk';
export default ChatAsk;
