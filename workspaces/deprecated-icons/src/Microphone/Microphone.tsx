import React, { SVGAttributes } from 'react';

export interface MicrophoneProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Microphone: React.FC<MicrophoneProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 10h-3V7A5 5 0 007 7v3H3v2h1a8.008 8.008 0 007 7.931V21H7l-1 1v1h12v-1l-1-1h-4v-1.069A8.008 8.008 0 0020 12h1v-2h-1zM9 7a3 3 0 016 0v4.708A2.992 2.992 0 019.03 12H14v-2H9V7zm3 11a6.006 6.006 0 01-6-6h1.03a4.977 4.977 0 009.94 0H18a6.006 6.006 0 01-6 6z' />
        </svg>
    );
};

Microphone.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Microphone.displayName = 'Microphone';
export default Microphone;
