import React, { SVGAttributes } from 'react';

export interface DolphinProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Dolphin: React.FC<DolphinProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2.652 2.933a2.629 2.629 0 012.457-.7l1.438.335c2.416-.78 4.676-.258 6.293.426a12.348 12.348 0 012.304 1.287c1.539-.58 3.023-.553 4.138-.376a9.3 9.3 0 011.524.376 7.443 7.443 0 01.604.235l.012.006.005.002.001.001h.002a1 1 0 01.162 1.71L18.709 8.35l.114.228c.316.656.695 1.594.952 2.737.482 2.134.538 4.993-1.033 8.012l.672.672H21a1 1 0 011 1v1h-3a1 1 0 01-.707-.293l-.793-.793-.793.793A1 1 0 0116 22h-3v-1a1 1 0 011-1h1.586l.796-.796a13.405 13.405 0 00-1.013-2.48c-.769-1.428-1.762-2.506-2.984-2.695l-1.678 1.678a1 1 0 01-1.101.212l-.012-.005.01.005-.003-.002-.007-.003-.016-.007-.044-.021a4.026 4.026 0 01-.552-.331 4.1 4.1 0 01-1.076-1.125c-.63-.99-.868-2.361-.166-4.1l-4.757-3.4a2.629 2.629 0 01-.33-3.998zM9.88 13.706l1.414-1.413A1 1 0 0112 12c2.6 0 4.229 2.101 5.13 3.776.19.351.356.7.502 1.035.606-1.905.508-3.656.192-5.055a10.867 10.867 0 00-.803-2.308 8.68 8.68 0 00-.424-.777l-.015-.024a.419.419 0 00-.007-.01l-.002-.004h-.001a1 1 0 01.236-1.368l1.93-1.417c-.96-.121-2.142-.072-3.308.483a1 1 0 01-1.08-.142v-.001l-.003-.002-.024-.02a8.621 8.621 0 00-.572-.416c-.405-.27-.987-.616-1.691-.914-1.418-.6-3.241-.975-5.117-.29a1 1 0 01-.57.035l-1.72-.401a.629.629 0 00-.508 1.124L9.58 9.186a1 1 0 01.3 1.288c-.857 1.59-.564 2.448-.287 2.882.086.135.185.252.285.35zm6.694-5.073v.002c.002.003 0-.002 0-.002z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Dolphin.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Dolphin.displayName = 'Dolphin';
export default Dolphin;
