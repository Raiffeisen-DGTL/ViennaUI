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
            <path
                fillRule='evenodd'
                d='M8 5a4 4 0 118 0v6a4 4 0 01-8 0V5zm4-2a2 2 0 00-2 2v6a2 2 0 104 0V5a2 2 0 00-2-2z'
                clipRule='evenodd'
            />
            <path d='M13 18.937A7.999 7.999 0 0020 11h-2a6 6 0 01-12 0H4a8 8 0 007 7.937V21H8v2h8v-2h-3v-2.063z' />
        </svg>
    );
};

Microphone.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Microphone.displayName = 'Microphone';
export default Microphone;
