import React, { SVGAttributes } from 'react';

export interface PingPongProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PingPong: React.FC<PingPongProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.847 5.153a7.574 7.574 0 012.16 5.898 9.35 9.35 0 01-2.78 6.036 9.312 9.312 0 01-6.537 2.789 7.639 7.639 0 01-4.635-1.517l-4.348 4.348-1.414-1.414 4.353-4.353a7.837 7.837 0 01-1.341-6.22l-.012-.013.05-.156c.133-.663.338-1.31.611-1.929l.008.009.022-.068 8.925 8.936a7.624 7.624 0 002.9-1.824 7.358 7.358 0 002.2-4.74 5.607 5.607 0 00-1.578-4.366 5.543 5.543 0 00-3.98-1.588h-.112a4.757 4.757 0 00-.668-1.958c.092-.008.183-.024.276-.03a7.554 7.554 0 015.9 2.16zm-12.709 7.4a5.378 5.378 0 005.322 5.322l-5.322-5.322zm2.424-3.621a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-5.25a1.749 1.749 0 100 3.5 1.75 1.75 0 100-3.5z' />
        </svg>
    );
};

PingPong.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PingPong.displayName = 'PingPong';
export default PingPong;
