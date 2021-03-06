import React, { SVGAttributes } from 'react';

export interface LibraProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Libra: React.FC<LibraProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 3V1h-2v2h2zM8 20h3V7.074A6.408 6.408 0 008.1 8.3a6.682 6.682 0 00-.978.896 4.893 4.893 0 00-.284.35l-.008.012-.295.442H2V8h3.512c.036-.042.074-.087.116-.133A8.68 8.68 0 016.9 6.7 8.403 8.403 0 0112 5c2.265 0 3.97.853 5.1 1.7A8.68 8.68 0 0118.488 8H22v2h-4.535l-.294-.441-.01-.013a4.885 4.885 0 00-.284-.35A6.683 6.683 0 0015.9 8.3 6.408 6.408 0 0013 7.074V20h3v2H8v-2z' />
            <path
                fillRule='evenodd'
                d='M16 12a1 1 0 00-1 1c0 .64.11 1.275.326 1.871.216.597.536 1.147.947 1.616.41.47.905.85 1.46 1.112.555.263 1.156.401 1.767.401s1.212-.138 1.767-.4a4.51 4.51 0 001.46-1.113c.41-.47.73-1.019.947-1.615A5.5 5.5 0 0024 13a1 1 0 00-1-1h-7zm1.207 2.19a3.404 3.404 0 01-.063-.19h4.712a3.08 3.08 0 01-.634 1.17 2.51 2.51 0 01-.81.622A2.13 2.13 0 0119.5 16c-.308 0-.618-.07-.912-.208a2.51 2.51 0 01-.81-.622 3.08 3.08 0 01-.571-.98zM0 13a1 1 0 011-1h7a1 1 0 011 1 5.5 5.5 0 01-.326 1.871 5.079 5.079 0 01-.947 1.616c-.41.47-.905.85-1.46 1.112A4.12 4.12 0 014.5 18a4.125 4.125 0 01-1.767-.4 4.51 4.51 0 01-1.46-1.113 5.079 5.079 0 01-.947-1.615A5.5 5.5 0 010 13zm2.144 1a3.08 3.08 0 00.634 1.17c.24.274.516.482.81.622.294.139.604.208.912.208.308 0 .618-.07.912-.208a2.51 2.51 0 00.81-.622A3.08 3.08 0 006.856 14H2.144z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Libra.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Libra.displayName = 'Libra';
export default Libra;
