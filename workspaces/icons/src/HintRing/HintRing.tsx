import React, { SVGAttributes } from 'react';

export interface HintRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HintRing: React.FC<HintRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.25 15.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM9.857 7.771c-.554.492-.84 1.154-.857 1.984h1.786c.022-.373.15-.67.383-.89.233-.224.538-.336.916-.336.373 0 .677.101.91.304a.992.992 0 01.342.777c0 .312-.079.57-.237.772-.154.202-.444.43-.87.685-.461.273-.784.57-.969.89-.189.338-.261.762-.217 1.272l.013.383h1.746v-.35c0-.325.077-.589.231-.79.154-.203.45-.431.89-.686.94-.554 1.41-1.299 1.41-2.235 0-.756-.285-1.369-.856-1.84C13.898 7.238 13.14 7 12.204 7c-.994 0-1.776.257-2.347.771z' />
            <path
                fillRule='evenodd'
                d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

HintRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HintRing.displayName = 'HintRing';
export default HintRing;
