import React, { SVGAttributes } from 'react';

export interface CloseRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CloseRing: React.FC<CloseRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 3.894A8.115 8.115 0 003.894 12 8.106 8.106 0 1012 3.894zM12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm5 5v1.456l-3.586 3.586L17 15.627V17h-1.456L12 13.456 8.456 17H7v-1.373l3.586-3.585-3.617-3.618V6.969h1.372L12 10.627 15.628 7H17z' />
        </svg>
    );
};

CloseRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CloseRing.displayName = 'CloseRing';
export default CloseRing;
