import React, { SVGAttributes } from 'react';

export interface WrenchProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Wrench: React.FC<WrenchProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M10.61 4.163L14 6.471V12H8.668L6 10.006a6 6 0 003.429 5.415l.571.271V22H8v-5.072A8 8 0 014.273 7.93a1 1 0 011.564-.542L9.332 10H12V7.53L7.937 4.764A1 1 0 018 3.072a8 8 0 118 13.856V22h-2v-6.308l.571-.27a6 6 0 00-3.961-11.26z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Wrench.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Wrench.displayName = 'Wrench';
export default Wrench;
